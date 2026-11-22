# Telegram+ by Shuh Lab

Telegram+ is a pilot AI assistant for Telegram Business messages. The verified owner describes the role, tone, restrictions and escalation rules in ordinary language. The assistant can use approved project documents and hand conversations that need a human to a manager.

**Website:** https://telegram-plus.m2g.pro/ · **English:** https://telegram-plus.m2g.pro/en/

**Try the pilot:** https://telegram-plus.m2g.pro/go/start · **Owner dashboard:** https://telegram-plus.m2g.pro/go/owner

## How it works

1. Configure the assistant in a private conversation using natural-language instructions — no scripting of every reply.
2. Add project knowledge from PDF, DOCX, XLSX, CSV, TXT or JSON. Private projects also support folder/ZIP imports.
3. Choose the authorized Telegram Business chats, test the answers and enable the assistant.
4. Complex or exceptional questions are handed to a person, with relevant context.

Google Sheets can provide current catalog values and Google Calendar can check selected busy/free intervals **after separate authorization**. Google OAuth is **not yet enabled for the public pilot**; do not represent these integrations as automatically available to every user. Prices, inventory, available slots, and legal or medical assessments must not be invented.

## Public website source

The [`public-site/`](https://github.com/ShuhLab/Telegram-Plus/tree/main/public-site) folder contains a snapshot of the publicly served Russian/English storefront HTML, CSS, JavaScript, `robots.txt`, and `sitemap.xml` as of November 22, 2026.

This is a **public presentation website**, not the executable Telegram+ backend. It uses the production site's `/store/assets/` paths and may require path adaptation to run elsewhere. Production bot logic, database, billing, OAuth secrets, user data, and internal deployment credentials are intentionally **not** included in this public repository.

## Feedback and testing

**Try it with a colleague.** Use a fictional sample rule such as “We open at 10. Ask the manager about discounts.” Verify that the assistant answers the opening-hours question from the rule and hands the discount request to a person.

[Report a bug or suggest an improvement](https://github.com/ShuhLab/Telegram-Plus/issues/new). Include interface language, steps to reproduce, expected behavior and actual result. Do not publish customer conversations or personal information in GitHub Issues.

## Для тестировщиков

Настройте пилот на одном тестовом чате и дайте правило обычным сообщением: «Мы открываемся в 10. Вопросы о скидках передавай менеджеру». Проверьте, что помощник соблюдает правило и корректно передаёт сложные вопросы человеку.

Сайт Telegram+: https://telegram-plus.m2g.pro/ · [Обратная связь](https://github.com/ShuhLab/Telegram-Plus/issues)

Документы и таблицы поддерживаются, но публикация материалов в общих Business-ответах требует одобрения владельца. Google Sheets / Google Calendar — пилотные интеграции, требующие отдельной настройки и авторизации.

[Watch handoff demo](https://www.youtube.com/watch?v=0hFo3nXjTvU) · [Privacy](https://m2g.pro/telegram-plus/privacy) · [Terms](https://m2g.pro/telegram-plus/terms)
