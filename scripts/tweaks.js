/* ============================================================
   Reflection AI — Tweaks panel (vanilla)
   ============================================================ */
(function () {
  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "accent": "#1E5C2E",
    "displayFont": "Cormorant Garamond",
    "canvas": "#F2F0EB",
    "showFooterMark": true
  }/*EDITMODE-END*/;

  const ACCENT_OPTIONS = [
    { name: 'Forest', value: '#1E5C2E', active: '#1A4F27' },
    { name: 'Coral',  value: '#cc785c', active: '#a9583e' },
    { name: 'Indigo', value: '#3a4a8a', active: '#2c3a73' },
    { name: 'Plum',   value: '#7a3a5a', active: '#5e2c46' },
  ];

  const FONT_OPTIONS = [
    { name: 'Cormorant Garamond', stack: "'Cormorant Garamond', Garamond, 'Times New Roman', serif" },
    { name: 'Fraunces',           stack: "'Fraunces', Garamond, serif", load: 'Fraunces:wght@400;500;600' },
    { name: 'Instrument Serif',   stack: "'Instrument Serif', Garamond, serif", load: 'Instrument+Serif:wght@400' },
    { name: 'EB Garamond',        stack: "'EB Garamond', Garamond, serif", load: 'EB+Garamond:wght@500;600' },
  ];

  const CANVAS_OPTIONS = [
    { name: 'Cream',  value: '#F2F0EB' },
    { name: 'Paper',  value: '#f4eee2' },
    { name: 'Bone',   value: '#ebe5d8' },
    { name: 'White',  value: '#ffffff' },
  ];

  const STORAGE_KEY = '__reflection_tweaks';
  const state = Object.assign({}, TWEAK_DEFAULTS, JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'));

  function persist() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    try {
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: state }, '*');
    } catch (e) {}
  }

  function loadFont(family) {
    const opt = FONT_OPTIONS.find(o => o.name === family);
    if (!opt || !opt.load) return;
    const id = 'gf-' + opt.load.replace(/\W+/g, '-');
    if (document.getElementById(id)) return;
    const link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=' + opt.load + '&display=swap';
    document.head.appendChild(link);
  }

  function applyTweaks() {
    const root = document.documentElement.style;
    const accent = ACCENT_OPTIONS.find(a => a.value === state.accent) || ACCENT_OPTIONS[0];
    root.setProperty('--color-primary', accent.value);
    root.setProperty('--color-primary-active', accent.active);
    root.setProperty('--site-canvas', state.canvas);

    const font = FONT_OPTIONS.find(f => f.name === state.displayFont) || FONT_OPTIONS[0];
    if (font.load) loadFont(font.name);
    root.setProperty('--site-display', font.stack);

    document.body.style.background = state.canvas;
    // tint the soft surface a bit toward the canvas
    root.setProperty('--color-surface-soft', mix(state.canvas, '#000', 0.04));
    root.setProperty('--color-surface-card', mix(state.canvas, '#000', 0.08));

    const fm = document.querySelector('[data-footer-mark]');
    if (fm) fm.style.display = state.showFooterMark ? '' : 'none';
  }

  function mix(hex, with_, amt) {
    const a = hexToRgb(hex), b = hexToRgb(with_);
    const r = Math.round(a.r * (1 - amt) + b.r * amt);
    const g = Math.round(a.g * (1 - amt) + b.g * amt);
    const bl = Math.round(a.b * (1 - amt) + b.b * amt);
    return `rgb(${r}, ${g}, ${bl})`;
  }
  function hexToRgb(h) {
    h = h.replace('#', '');
    if (h.length === 3) h = h.split('').map(c => c + c).join('');
    return { r: parseInt(h.slice(0, 2), 16), g: parseInt(h.slice(2, 4), 16), b: parseInt(h.slice(4, 6), 16) };
  }

  // ---------- Panel UI ----------
  let panel, visible = false;

  function buildPanel() {
    panel = document.createElement('div');
    panel.id = 'tweaks-panel';
    panel.style.cssText = `
      position: fixed; right: 24px; bottom: 24px; width: 320px;
      background: #faf9f5; border: 1px solid #e6dfd8; border-radius: 12px;
      padding: 0; font-family: var(--font-body); color: #141413;
      box-shadow: 0 12px 32px rgba(20,20,19,0.12);
      display: none; z-index: 50;
    `;
    panel.innerHTML = `
      <div style="display:flex; align-items:center; justify-content:space-between; padding:16px 20px; border-bottom:1px solid #e6dfd8;">
        <div style="font-size:13px; font-weight:500; letter-spacing:1.4px; text-transform:uppercase; color:#6c6a64;">Tweaks</div>
        <button data-close style="background:none; border:none; cursor:pointer; color:#6c6a64; font-size:18px; line-height:1; padding:4px;">×</button>
      </div>
      <div style="padding:20px; display:flex; flex-direction:column; gap:20px;">
        <section>
          <div class="tw-label">Accent</div>
          <div data-accent class="tw-swatches"></div>
        </section>
        <section>
          <div class="tw-label">Canvas</div>
          <div data-canvas class="tw-swatches"></div>
        </section>
        <section>
          <div class="tw-label">Display font</div>
          <div data-font class="tw-options"></div>
        </section>
        <label style="display:flex; align-items:center; gap:10px; font-size:14px; cursor:pointer;">
          <input type="checkbox" data-mark style="margin:0;">
          <span>Show footer mark</span>
        </label>
      </div>
      <style>
        #tweaks-panel .tw-label { font-size:11px; font-weight:500; letter-spacing:1.4px; text-transform:uppercase; color:#6c6a64; margin-bottom:10px; }
        #tweaks-panel .tw-swatches { display:flex; gap:8px; }
        #tweaks-panel .tw-swatches button {
          width:36px; height:36px; border-radius:9999px; border:2px solid transparent; cursor:pointer; padding:0;
          transition: border-color 200ms;
        }
        #tweaks-panel .tw-swatches button[aria-pressed="true"] { border-color: #141413; }
        #tweaks-panel .tw-options { display:grid; grid-template-columns: 1fr 1fr; gap:8px; }
        #tweaks-panel .tw-options button {
          font-family: var(--font-display); font-size:18px; font-weight:500;
          padding: 12px; border-radius: 8px; background: #faf9f5; border: 1px solid #e6dfd8; cursor:pointer;
          color: #141413; text-align:left; transition: all 200ms;
        }
        #tweaks-panel .tw-options button[aria-pressed="true"] { background: #efe9de; border-color: #141413; }
      </style>
    `;
    document.body.appendChild(panel);

    // accent swatches
    const accentEl = panel.querySelector('[data-accent]');
    ACCENT_OPTIONS.forEach(opt => {
      const b = document.createElement('button');
      b.type = 'button';
      b.title = opt.name;
      b.style.background = opt.value;
      b.setAttribute('aria-pressed', state.accent === opt.value);
      b.onclick = () => { state.accent = opt.value; applyTweaks(); persist(); refresh(); };
      accentEl.appendChild(b);
    });

    const canvasEl = panel.querySelector('[data-canvas]');
    CANVAS_OPTIONS.forEach(opt => {
      const b = document.createElement('button');
      b.type = 'button';
      b.title = opt.name;
      b.style.background = opt.value;
      b.style.border = '1px solid #e6dfd8';
      b.setAttribute('aria-pressed', state.canvas === opt.value);
      b.onclick = () => { state.canvas = opt.value; applyTweaks(); persist(); refresh(); };
      canvasEl.appendChild(b);
    });

    const fontEl = panel.querySelector('[data-font]');
    FONT_OPTIONS.forEach(opt => {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = opt.name;
      b.setAttribute('aria-pressed', state.displayFont === opt.name);
      b.onclick = () => { state.displayFont = opt.name; applyTweaks(); persist(); refresh(); };
      fontEl.appendChild(b);
    });

    const markEl = panel.querySelector('[data-mark]');
    markEl.checked = !!state.showFooterMark;
    markEl.onchange = () => { state.showFooterMark = markEl.checked; applyTweaks(); persist(); };

    panel.querySelector('[data-close]').onclick = hide;
  }

  function refresh() {
    if (!panel) return;
    panel.querySelectorAll('[data-accent] button').forEach((b, i) => b.setAttribute('aria-pressed', ACCENT_OPTIONS[i].value === state.accent));
    panel.querySelectorAll('[data-canvas] button').forEach((b, i) => b.setAttribute('aria-pressed', CANVAS_OPTIONS[i].value === state.canvas));
    panel.querySelectorAll('[data-font] button').forEach((b, i) => b.setAttribute('aria-pressed', FONT_OPTIONS[i].name === state.displayFont));
  }

  function show() { if (!panel) buildPanel(); panel.style.display = 'block'; visible = true; }
  function hide() {
    if (panel) panel.style.display = 'none';
    visible = false;
    try { window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*'); } catch (e) {}
  }

  // Edit-mode protocol
  window.addEventListener('message', (e) => {
    if (!e.data || !e.data.type) return;
    if (e.data.type === '__activate_edit_mode') show();
    else if (e.data.type === '__deactivate_edit_mode') hide();
  });
  try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch (e) {}

  // Apply on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyTweaks);
  } else {
    applyTweaks();
  }
})();
