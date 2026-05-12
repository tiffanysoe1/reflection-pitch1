/* Shared nav + footer markup, injected by JS so each page is one source of truth */
(function () {
  const PAGES = [
    { slug: 'about',           href: 'about.html',           label: 'About',          num: '01', sub: 'Who am I' },
    { slug: 'introduction',    href: 'introduction.html',    label: 'Introduction',   num: '02', sub: 'A short orientation to Reflection AI' },
    { slug: 'big-questions',   href: 'big-questions.html',   label: 'The Big Questions',  num: '03', sub: 'Predictions about the Future' },
    { slug: 'landscape',       href: 'landscape.html',       label: 'Competitor Landscape',      num: '04', sub: 'Clients, competitors' },
    { slug: 'strategy',        href: 'strategy.html',        label: 'Strategy',       num: '05', sub: 'Where I think Reflection should focus' },
    { slug: 'infrastructure',  href: 'infrastructure.html',  label: 'Infra', num: '06', sub: 'A view on the AI stack underneath' },
    { slug: 'parting',         href: 'parting.html',         label: 'Parting Thoughts', num: '07', sub: 'Personal Reflection' },
    { slug: 'other',           href: 'other.html',           label: 'Other',          num: '08', sub: 'Appendix, references, miscellany' },
  ];

  window.REFLECTION_PAGES = PAGES;

  function spike() {
    return `<svg class="mark" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
      <circle cx="50" cy="34" r="22" fill="none" stroke="currentColor" stroke-width="4"/>
      <circle cx="50" cy="66" r="22" fill="none" stroke="currentColor" stroke-width="4" stroke-dasharray="3 5"/>
    </svg>`;
  }

  function renderNav(currentSlug) {
    const links = PAGES.map(p =>
      `<a href="${p.href}" ${p.slug === currentSlug ? 'aria-current="page"' : ''}>${p.label}</a>`
    ).join('');
    return `
      <nav class="nav" data-screen-label="Top nav">
        <div class="nav-inner">
          <a class="brand" href="index.html">
            ${spike()}
            <span class="brand-title">Reflection<span style="color: var(--color-primary);">.</span></span>
            <span class="brand-sub">A pitch by Tiffany Soerianto</span>
          </a>
          <div class="nav-links">${links}</div>
          <a class="nav-cta" href="mailto:tsoerianto@ucsd.edu">Get in touch →</a>
        </div>
      </nav>
    `;
  }

  function renderFooter(currentSlug) {
    const idx = PAGES.findIndex(p => p.slug === currentSlug);
    const prev = idx > 0 ? PAGES[idx - 1] : null;
    const next = idx >= 0 && idx < PAGES.length - 1 ? PAGES[idx + 1] : null;

    const pager = (idx >= 0) ? `
      <div class="wrap">
        <div class="pager">
          ${prev ? `
            <a href="${prev.href}">
              <span class="label">← Previous · ${prev.num}</span>
              <span class="title">${prev.label}</span>
            </a>` : `<span></span>`}
          ${next ? `
            <a href="${next.href}">
              <span class="label">Next · ${next.num} →</span>
              <span class="title">${next.label}</span>
            </a>` : `<span></span>`}
        </div>
      </div>` : '';

    return `
      ${pager}
      <footer class="footer" data-screen-label="Footer">
        <div class="wrap">
          <div class="footer-top">
            <div class="brand-block">
              <a class="brand" href="index.html" data-footer-mark>
                ${spike()}
                <span class="brand-title">Reflection<span style="color: var(--color-primary);">.</span></span>
              </a>
              <p class="blurb">A self-directed pitch document, prepared for the team at Reflection AI. Written candidly.</p>
            </div>
            <div class="footer-cols">
              <div>
                <div class="col-title">The pitch</div>
                <ul>
                  ${PAGES.slice(0, 4).map(p => `<li><a href="${p.href}">${p.num} · ${p.label}</a></li>`).join('')}
                </ul>
              </div>
              <div>
                <div class="col-title">Continued</div>
                <ul>
                  ${PAGES.slice(4).map(p => `<li><a href="${p.href}">${p.num} · ${p.label}</a></li>`).join('')}
                </ul>
              </div>
              <div>
                <div class="col-title">Reach me</div>
                <ul>
                  <li><a href="mailto:tsoerianto@ucsd.edu">tsoerianto@ucsd.edu</a></li>
                  <li><a href="https://www.linkedin.com/in/tiffany-s-7662a5137/">lhttps://www.linkedin.com/in/tiffany-s-7662a5137/</a></li>
                  <li><a href="https://finetti.posthaven.com">finetti.posthaven.com</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <span>© 2026 — written for Reflection AI. All views my own.</span>
            <span>San Francisco · drafted over two weekends</span>
          </div>
        </div>
      </footer>
    `;
  }

  function init() {
    const slug = document.body.dataset.page || '';
    const navHost = document.getElementById('site-nav');
    const footHost = document.getElementById('site-footer');
    if (navHost) navHost.outerHTML = renderNav(slug);
    if (footHost) footHost.outerHTML = renderFooter(slug);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
