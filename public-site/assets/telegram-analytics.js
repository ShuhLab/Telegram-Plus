"use strict";
(() => {
  // Third-party analytics are strictly opt-in. No third-party script is fetched
  // before the visitor makes a choice. The first-party server counter works
  // independently and does not use cookies.
  if (location.hostname !== "telegram-plus.m2g.pro") return;

  const KEY = "telegram-plus-analytics-choice-v1";
  const YANDEX_ID = 114510196;
  const G_MEASUREMENT_ID = "G-LRFH7DRXW2"; // Dedicated Telegram+ GA4 property 565433601, website stream 16394055541.
  const panel = document.getElementById("tplus-analytics-consent");
  const settings = document.getElementById("tplus-analytics-settings");
  const accept = document.getElementById("tplus-consent-accept");
  const reject = document.getElementById("tplus-consent-reject");
  let active = false;

  const readChoice = () => {
    try { return localStorage.getItem(KEY); } catch (_) { return null; }
  };
  const saveChoice = (value) => {
    try { localStorage.setItem(KEY, value); } catch (_) { /* private mode */ }
  };
  const loadScript = (src) => {
    const e = document.createElement("script");
    e.async = true;
    e.src = src;
    document.head.appendChild(e);
  };

  function activate() {
    if (active) return;
    active = true;
    window.ym = window.ym || function () {
      (window.ym.a = window.ym.a || []).push(arguments);
    };
    window.ym.l = +new Date();
    // No Webvisor or session recording, no clickmaps or ecommerce payloads.
    window.ym(YANDEX_ID, "init", {
      webvisor: false,
      clickmap: false,
      trackLinks: false,
      accurateTrackBounce: true
    });
    // Yandex's officially documented global CDN. The Russian domain is used
    // only as a fallback if the alternative CDN cannot load.
    const globalMetrica = document.createElement("script");
    globalMetrica.async = true;
    globalMetrica.src = "https://mc.yandex.com/metrika/tag.js?id=" + YANDEX_ID;
    globalMetrica.addEventListener("error", () => {
      loadScript("https://mc.yandex.ru/metrika/tag.js?id=" + YANDEX_ID);
    }, { once: true });
    document.head.appendChild(globalMetrica);

    if (G_MEASUREMENT_ID) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag("js", new Date());
      window.gtag("config", G_MEASUREMENT_ID, {
        send_page_view: true,
        anonymize_ip: true,
        allow_google_signals: false,
        allow_ad_personalization_signals: false
      });
      loadScript("https://www.googletagmanager.com/gtag/js?id=" + G_MEASUREMENT_ID);
    }
  }
  function choice(value) {
    saveChoice(value);
    if (panel) panel.hidden = true;
    if (value === "yes") activate();
    else if (active) location.reload(); // Stop third-party scripts on withdrawal.
  }
  if (settings) settings.hidden = false;
  if (settings) settings.addEventListener("click", () => {
    if (panel) { panel.hidden = false; panel.querySelector("button")?.focus(); }
  });
  if (accept) accept.addEventListener("click", () => choice("yes"));
  if (reject) reject.addEventListener("click", () => choice("no"));

  const saved = readChoice();
  if (saved === "yes") activate();
  else if (panel && saved !== "no") panel.hidden = false;
})();
