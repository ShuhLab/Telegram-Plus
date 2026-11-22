/* Telegram+ motion v3. Presentation only: no fetch, cookies, storage or billing. */
(() => {
  'use strict';
  const root = document.documentElement;
  const body = document.body;
  const visual = document.querySelector('.hero-visual');
  const radios = [...document.querySelectorAll('.scenario-radio')];
  const toggle = document.querySelector('.motion-toggle');
  if (!visual || radios.length !== 3 || !toggle) return;
  const ru = root.lang === 'ru';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let enabled = !reduced.matches;
  let visible = visual.getBoundingClientRect().top < innerHeight;
  let autoStarted = false;
  let timers = [];
  const count = document.querySelector('.demo-count');
  const later = (fn, ms) => { timers.push(window.setTimeout(fn, ms)); };
  const selected = () => Math.max(0, radios.findIndex(radio => radio.checked));

  function stop() {
    timers.forEach(window.clearTimeout);
    timers = [];
    visual.classList.remove('is-playing', 'is-typing');
    visual.querySelectorAll('.bubble').forEach(el => el.classList.remove('message-shown'));
  }
  function play(index = selected(), remaining = 0) {
    stop();
    radios[index].checked = true;
    count.textContent = `0${index + 1} / 03`;
    if (!enabled || reduced.matches || document.hidden || !visible) return;
    const messages = [...visual.querySelectorAll(`.scene-${index} .bubble`)];
    if (messages.length !== 4) return;
    // Force a fresh CSS timeline without changing layout or measured content height.
    void visual.offsetWidth;
    visual.classList.add('is-playing');
    messages[0].classList.add('message-shown');
    later(() => visual.classList.add('is-typing'), 650);
    later(() => { messages[1].classList.add('message-shown'); visual.classList.remove('is-typing'); }, 1600);
    later(() => messages[2].classList.add('message-shown'), 3000);
    later(() => visual.classList.add('is-typing'), 3650);
    later(() => { messages[3].classList.add('message-shown'); visual.classList.remove('is-typing'); }, 4800);
    later(() => {
      stop();
      if (remaining > 0) play((index + 1) % 3, remaining - 1);
    }, 7800);
  }
  function applyMotion() {
    enabled = enabled && !reduced.matches;
    body.dataset.motion = enabled ? 'on' : 'off';
    root.classList.toggle('motion-paused', !enabled);
    toggle.setAttribute('aria-pressed', String(enabled));
    toggle.disabled = reduced.matches;
    toggle.setAttribute('aria-label', reduced.matches
      ? (ru ? 'Движение выключено в настройках устройства' : 'Motion is disabled by your device preference')
      : enabled ? (ru ? 'Выключить анимации' : 'Turn animations off')
      : (ru ? 'Включить анимации' : 'Turn animations on'));
    toggle.querySelector('.motion-label').textContent = enabled
      ? (ru ? 'Движение' : 'Motion') : (ru ? 'Без движения' : 'Motion off');
    if (!enabled) stop();
  }
  toggle.addEventListener('click', () => {
    enabled = !enabled;
    applyMotion();
    if (enabled) play();
  });
  radios.forEach((radio, index) => radio.addEventListener('change', () => {
    autoStarted = true;
    play(index);
  }));
  document.querySelector('.replay-demo').addEventListener('click', () => play());
  document.querySelector('.hero-actions a[href="#demo"]').addEventListener('click', () => {
    autoStarted = true;
    // Anchor scrolling remains native. Start only when the demo enters the viewport.
    later(() => { visible = true; play(0, 2); }, enabled ? 450 : 0);
  });
  reduced.addEventListener('change', () => {
    enabled = !reduced.matches;
    applyMotion();
  });
  document.addEventListener('visibilitychange', () => {
    body.classList.toggle('page-idle', document.hidden);
    if (document.hidden) stop();
  });
  applyMotion();
  root.classList.add('enhanced');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.remove('pending');
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      }
    }, { threshold: 0.06 });
    document.querySelectorAll('.reveal').forEach(el => {
      if (enabled && el.getBoundingClientRect().top >= innerHeight) el.classList.add('pending');
      revealObserver.observe(el);
    });
    const motionObserver = new IntersectionObserver(entries => {
      for (const entry of entries) {
        entry.target.classList.toggle('is-offscreen', !entry.isIntersecting);
        if (entry.target === visual) {
          visible = entry.isIntersecting;
          if (!visible) stop();
          else if (!autoStarted) { autoStarted = true; play(0, 2); }
        }
      }
    }, { threshold: 0.12 });
    [visual, document.querySelector('.signal-band'), document.querySelector('.control')]
      .filter(Boolean).forEach(el => motionObserver.observe(el));
  } else if (visible) {
    autoStarted = true;
    play(0, 2);
  }
})();
