# Telegram+ by Shuh Lab

Telegram+ is a pilot AI assistant for Telegram Business conversations. A verified owner can define instructions in natural language, provide documents and spreadsheets, choose authorized chats, and route complex conversations to a human manager.

**Public website:** https://telegram-plus.m2g.pro/  
**English website:** https://telegram-plus.m2g.pro/en/  
**Try the pilot:** https://telegram-plus.m2g.pro/go/start  
**Owner dashboard:** https://telegram-plus.m2g.pro/go/owner

## Capabilities

- **No response scripting:** describe the assistant's role, tone, rules, exceptions, and handoffs in ordinary language.
- **Project knowledge:** PDF, DOCX, XLSX, CSV, TXT, and JSON; private projects also support folder/ZIP batch uploads.
- **Telegram Business scope:** the verified owner selects permitted conversations and exclusions, tests replies, and explicitly enables automated responses.
- **Human handoff:** when staff must decide, the request can be handed over with context.
- **Conditional Google integrations:** Google Sheets can read current catalog data, and Google Calendar can check time intervals after separate authorization. **Google OAuth is not yet enabled for the public pilot.** Availability, prices, or bookings are not guaranteed without checking the actual source.
- **Billing model:** intended pay-per-use, without mandatory subscription. Commercial availability is limited to the stated pilot status.

## Website source

The [`public-site/`](https://github.com/ShuhLab/Telegram-Plus/tree/main/public-site) directory is a snapshot of publicly served storefront files, including the Russian and English HTML pages, CSS, JavaScript, `robots.txt`, `sitemap.xml`, and an [analytics privacy disclosure](https://telegram-plus.m2g.pro/privacy/analytics/).

This is **not the executable backend**. Server-side application code, private connections, payment systems, tokens, customer messages, and deployment credentials are deliberately absent. The published HTML uses server URL rewrites and shared `/store/assets/` paths, so local hosting may require path adjustments.

### Analytics and international discovery

- Dedicated **Google Analytics 4** stream: `G-LRFH7DRXW2`.
- Dedicated **Yandex Metrica** counter: `114510196`.
- These third-party scripts load **only after visitor consent**, without Yandex session replay (Webvisor). A separate first-party server counter aggregates views and selected conversion links without tracking cookies.
- Visitors can decline or withdraw consent; [analytics disclosure](https://telegram-plus.m2g.pro/privacy/analytics/) explains how.
- Canonical public URLs are the `.m2g.pro` subdomain. The site currently has **two fully localized pages (Russian and English)**, with reciprocal `hreflang` and English `x-default`. Other-language copies must be translated before their URLs are submitted for indexing.
- Sitemap: https://telegram-plus.m2g.pro/sitemap.xml. Changed URLs are submitted to IndexNow participants. IndexNow **does not notify Google**.

## Feedback and testing

[Report a bug or suggest an improvement](https://github.com/ShuhLab/Telegram-Plus/issues/new). Use test data only and do not publish real customer conversations, private documents, payment information or credentials.

**Тестировщикам:** можно задать правило обычным сообщением: «Мы открываемся в 10:00; вопросы о скидках передавай менеджеру». Проверьте ответы на тестовом чате и передайте замечания через Issues.

**Public legal documents:** [Terms](https://m2g.pro/telegram-plus/terms) · [Privacy](https://m2g.pro/telegram-plus/privacy) · [Analytics disclosure](https://telegram-plus.m2g.pro/privacy/analytics/) · [Feedback](https://m2g.pro/telegram-plus/feedback)
