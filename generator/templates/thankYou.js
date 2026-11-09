const config = require("../data/config");

// Where Zoho sends people after it accepts the lead. Deliberately kept out of
// the sitemap and marked noindex: it is a destination, not a page anyone
// should arrive at from a search result.
module.exports = function thankYou() {
  return `
  <section class="hero" style="padding-bottom:40px;">
    <div class="container hero-inner" style="max-width:640px;">
      <div class="icon" style="margin:0 auto 20px;">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
      </div>
      <h1>Thanks — we have it</h1>
      <p class="lead">Your message is with our team in Beirut. Someone will read it properly and reply, normally within one business day.</p>
    </div>
  </section>

  <section style="padding-top:0;">
    <div class="container" style="max-width:640px;">
      <div class="card">
        <h2 style="font-size:1.1rem;">In a hurry?</h2>
        <p style="font-size:.93rem;">If it is urgent, WhatsApp is the fastest way to reach us — it is how most of our clients get hold of us.</p>
        <div class="hero-actions" style="justify-content:flex-start;margin-bottom:0;">
          <a href="https://wa.me/${config.whatsapp}" class="btn btn-primary" target="_blank" rel="noopener">Message us on WhatsApp</a>
          <a href="tel:+${config.phone.href}" class="btn btn-ghost">${config.phone.display}</a>
        </div>
      </div>

      <div class="section-head" style="text-align:left;margin:40px 0 18px;max-width:none;">
        <h2 style="font-size:1.1rem;">While you wait</h2>
      </div>
      <div class="related-products">
        <a href="/zoho-products/">Browse Zoho products</a>
        <a href="/solutions/">Solutions by industry</a>
        <a href="/compare/">Compare Zoho with the alternatives</a>
        <a href="/markets/lebanon">Zoho in Lebanon</a>
        <a href="/blog/">Read the blog</a>
      </div>
    </div>
  </section>`;
};
