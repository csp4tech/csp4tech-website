// Zero-dependency site JS: mobile nav toggle + basic contact form UX feedback.
document.addEventListener("DOMContentLoaded", function () {
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var toggle = document.querySelector(".menu-toggle");
  var mobileNav = document.querySelector(".mobile-nav");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var isOpen = mobileNav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      document.body.style.overflow = isOpen ? "hidden" : "";
    });
  }

  var form = document.querySelector("[data-contact-form]");
  if (form) {
    // Basic spam protection: a honeypot field real visitors never see or
    // fill (bots that auto-fill every field will), plus a minimum time
    // between page load and submit (bots tend to submit almost instantly).
    // Neither is foolproof, but both stop the bulk of automated spam with
    // no friction for real visitors and no CAPTCHA to load.
    var loadedAtField = form.querySelector("[data-form-loaded-at]");
    if (loadedAtField) loadedAtField.value = String(Date.now());
    var MIN_SUBMIT_MS = 2500;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = form.querySelector("[data-form-status]");
      var honeypot = form.querySelector("#website");
      var loadedAt = loadedAtField ? parseInt(loadedAtField.value, 10) : 0;
      var submittedTooFast = loadedAt && Date.now() - loadedAt < MIN_SUBMIT_MS;

      if ((honeypot && honeypot.value.trim()) || submittedTooFast) {
        // Likely a bot. Show the same success message as a real submission
        // (so scripts don't learn to detect and route around this check)
        // but don't actually send anything.
        if (status) {
          status.textContent = "Thanks — we've received your message and will reply within one business day.";
          status.style.color = "#059669";
        }
        form.reset();
        if (loadedAtField) loadedAtField.value = String(Date.now());
        return;
      }

      var required = form.querySelectorAll("[required]");
      var valid = true;
      required.forEach(function (field) {
        if (!field.value.trim()) valid = false;
      });
      if (!valid) {
        if (status) {
          status.textContent = "Please fill in all required fields.";
          status.style.color = "#B91C1C";
        }
        return;
      }
      // NOTE: replace this with your real form endpoint (Zoho Forms / CRM webhook) before launch.
      if (status) {
        status.textContent = "Thanks — we've received your message and will reply within one business day.";
        status.style.color = "#059669";
      }
      form.reset();
      if (loadedAtField) loadedAtField.value = String(Date.now());
    });
  }

  // ---------- Industries tabs ("Our Service Sector") ----------
  var industryBlock = document.querySelector("[data-industry-block]");
  if (industryBlock) {
    var industryTabs = industryBlock.querySelectorAll("[data-industry-tab]");
    industryTabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        activateIndustryTab(tab);
      });
      tab.addEventListener("keydown", function (e) {
        var list = Array.prototype.slice.call(industryTabs);
        var idx = list.indexOf(tab);
        var next = null;
        if (e.key === "ArrowDown" || e.key === "ArrowRight") next = list[(idx + 1) % list.length];
        else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = list[(idx - 1 + list.length) % list.length];
        if (next) {
          e.preventDefault();
          next.focus();
          activateIndustryTab(next);
        }
      });
    });

    function activateIndustryTab(tab) {
      var slug = tab.getAttribute("data-industry-tab");
      industryTabs.forEach(function (t) {
        var isActive = t === tab;
        t.classList.toggle("is-active", isActive);
        t.setAttribute("aria-selected", isActive ? "true" : "false");
        t.setAttribute("tabindex", isActive ? "0" : "-1");
      });
      industryBlock.querySelectorAll(".industry-panel").forEach(function (panel) {
        panel.toggleAttribute("hidden", panel.id !== "industry-panel-" + slug);
      });
    }
  }

  // ---------- Scroll-reveal ----------
  // Fade/slide common content blocks in as they enter the viewport. Applied
  // entirely from JS (not baked into the server-rendered HTML) so anyone
  // without JS, and any crawler that doesn't run it, still gets the full
  // page content visible immediately — this is purely additive polish.
  if (!reduceMotion && "IntersectionObserver" in window) {
    var revealTargets = document.querySelectorAll(
      ".section-head, .card, .blog-card, .stat-grid > div, .faq details, .trusted-marquee, .related-products, .office-card, .form-card, .contact-info-list .item, .industry-block"
    );
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealTargets.forEach(function (el, i) {
      el.classList.add("reveal");
      // Small stagger within a row of siblings (cards in the same grid)
      // reads as intentional rather than everything popping in at once.
      el.style.transitionDelay = (i % 3) * 60 + "ms";
      revealObserver.observe(el);
    });
  }

  // ---------- Counting-up stats ----------
  if (!reduceMotion && "IntersectionObserver" in window) {
    var statEls = document.querySelectorAll(".stat-num");
    var statObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          statObserver.unobserve(entry.target);
          var el = entry.target;
          var match = el.textContent.match(/^(\D*)(\d+)(.*)$/);
          if (!match) return; // no digits found (shouldn't happen) — leave as-is
          var prefix = match[1], target = parseInt(match[2], 10), suffix = match[3];
          var duration = 1200;
          var start = null;
          function step(ts) {
            if (start === null) start = ts;
            var progress = Math.min((ts - start) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            var current = Math.floor(eased * target);
            el.textContent = prefix + current + suffix;
            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              el.textContent = prefix + target + suffix; // exact final text
            }
          }
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.4 }
    );
    statEls.forEach(function (el) { statObserver.observe(el); });
  }

  // ---------- Header scroll shadow + back-to-top button ----------
  // A single passive, rAF-throttled scroll listener drives both — cheap
  // (just a scrollY read plus two classList toggles) and never runs more
  // than once per animation frame, so it can't cause scroll jank.
  var header = document.querySelector(".site-header");
  var backToTop = document.querySelector(".back-to-top");
  if (header || backToTop) {
    var scrollTicking = false;
    var updateOnScroll = function () {
      var y = window.scrollY || window.pageYOffset;
      if (header) header.classList.toggle("is-scrolled", y > 40);
      if (backToTop) backToTop.classList.toggle("is-visible", y > 600);
      scrollTicking = false;
    };
    window.addEventListener(
      "scroll",
      function () {
        if (!scrollTicking) {
          scrollTicking = true;
          requestAnimationFrame(updateOnScroll);
        }
      },
      { passive: true }
    );
    updateOnScroll();
  }
  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  // ---------- Hero video ----------
  // The hero carries a looping Zoho CRM demo. Its poster is painted straight
  // away; the ~300KB video itself is only fetched AFTER the load event, so it
  // never competes with the hero image or the stylesheet for bandwidth during
  // first paint. Anyone who prefers reduced motion keeps the poster and the
  // file is never downloaded at all.
  (function heroVideo() {
    var v = document.querySelector(".hv-video");
    if (!v || !v.dataset.src) return;
    if (reduceMotion) return;                  // poster stays, nothing fetched
    // Phones get the poster only. Below 860px the window is ~340px wide, where
    // the CRM detail is unreadable anyway, so the video would be ~380KB of
    // mobile data buying nothing. Matches the CSS breakpoint that stacks the
    // hero. Checked once at load, not on resize: a desktop user who narrows
    // the window keeps the video they already have, which is the cheap outcome.
    if (window.matchMedia && window.matchMedia("(max-width: 860px)").matches) return;
    // Respect an explicit data-saver request where the browser exposes one.
    var conn = navigator.connection;
    if (conn && conn.saveData) return;

    function start() {
      // Two encodes, chosen at runtime rather than with <source> elements so
      // nothing is fetched until we decide to start. Most browsers take the
      // H.264 MP4; Chromium builds without proprietary codecs (common on
      // Linux) fall back to VP9, which they do support.
      var canH264 = v.canPlayType('video/mp4; codecs="avc1.42E01E"');
      v.src = (!canH264 && v.dataset.srcWebm) ? v.dataset.srcWebm : v.dataset.src;
      // play() rejects on some browsers/power-saving modes. That is fine:
      // the poster is already showing, so there is nothing to clean up.
      var p = v.play();
      if (p && typeof p.catch === "function") p.catch(function () {});
    }

    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
  })();
});
