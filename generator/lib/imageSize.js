const fs = require("fs");
const path = require("path");

// Intrinsic pixel dimensions for an asset, so every <img> can carry width and
// height attributes. Without them the browser does not know the aspect ratio
// until the file arrives, and the page jumps as images land — the "layout
// shift" that Core Web Vitals (and therefore ranking) measures.
//
// Reads the file directly rather than keeping a hand-maintained table, so a
// replaced logo can never silently keep the old dimensions.
const cache = new Map();

function parsePng(buf) {
  // PNG: 8-byte signature, then the IHDR chunk whose data starts at byte 16.
  if (buf.length < 24 || buf.readUInt32BE(0) !== 0x89504e47) return null;
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

function parseJpeg(buf) {
  if (buf.length < 4 || buf[0] !== 0xff || buf[1] !== 0xd8) return null;
  let i = 2;
  while (i < buf.length - 9) {
    if (buf[i] !== 0xff) { i++; continue; }
    const marker = buf[i + 1];
    // SOF0..SOF15, skipping the non-frame markers in that range.
    if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
      return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) };
    }
    i += 2 + buf.readUInt16BE(i + 2);
  }
  return null;
}

function parseSvg(text) {
  const vb = text.match(/viewBox\s*=\s*["']\s*([-\d.eE]+)[,\s]+([-\d.eE]+)[,\s]+([-\d.eE]+)[,\s]+([-\d.eE]+)/);
  if (vb) {
    const w = parseFloat(vb[3]), h = parseFloat(vb[4]);
    if (w > 0 && h > 0) return { width: w, height: h };
  }
  const w = text.match(/<svg[^>]*\bwidth\s*=\s*["']([\d.]+)/);
  const h = text.match(/<svg[^>]*\bheight\s*=\s*["']([\d.]+)/);
  if (w && h) return { width: parseFloat(w[1]), height: parseFloat(h[1]) };
  return null;
}

function intrinsic(absPath) {
  if (cache.has(absPath)) return cache.get(absPath);
  let out = null;
  try {
    if (/\.svg$/i.test(absPath)) out = parseSvg(fs.readFileSync(absPath, "utf8"));
    else {
      const buf = fs.readFileSync(absPath);
      out = /\.png$/i.test(absPath) ? parsePng(buf) : parseJpeg(buf);
    }
  } catch (e) {
    out = null;
  }
  cache.set(absPath, out);
  return out;
}

// Returns ` width="W" height="H"` sized so the given axis matches, preserving
// the real aspect ratio. Returns "" when the file cannot be measured, so a
// missing asset degrades to today's behaviour instead of breaking the build.
function sizeAttrs(assetPath, { height, width } = {}) {
  const abs = path.join(__dirname, "..", "assets", assetPath);
  const nat = intrinsic(abs);
  if (!nat) return "";
  const ratio = nat.width / nat.height;
  if (height) return ` width="${Math.round(height * ratio)}" height="${height}"`;
  if (width) return ` width="${width}" height="${Math.round(width / ratio)}"`;
  return ` width="${Math.round(nat.width)}" height="${Math.round(nat.height)}"`;
}

module.exports = { intrinsic, sizeAttrs };
