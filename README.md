# Next-i18n-Starter

## Overview
Next-i18n-Starter is a Next.js starter template designed for building bilingual websites with Spanish and English language support. It features automatic locale detection, a manual language switcher, and compliance with EU cookie laws, making it an ideal starting point for multilingual web projects.

## Features
- **Internationalization**: Built-in support for Spanish and English languages.
- **Automatic Locale Detection**: Routes users based on their browser language settings.
- **Language Switching**: Manual language switcher button for user preference.
- **EU Cookie Law Compliance**: Cookie policy implementation for transparency and compliance.
- **Flexible Language Management**: Ability to extend or change languages as needed.

## Demo
![Language Switching Demo](/next-i18n-starter.gif)

## Structure
- `[lang]/`: This directory dynamically switches between 'es' or 'en', adapting to the user's preferred locale. It functions as the primary `app` folder for the application. All language-specific pages are nested within this directory. For instance, an about page for each language would be structured as `[lang]/about/page.tsx`, where `[lang]` dynamically adjusts to 'es' or 'en' based on the user's settings.
- `middleware.ts`: Manages routing based on language preferences.
- `languageSwitcher.ts`: Handles manual language switching and cookie consent.
- `layout.tsx`: Integrates language settings and cookie consent, managing user preferences.
- `content.ts`: Contains the multilingual dictionary for the website.
- `page.tsx`, `Hero.tsx`, `CookieConsent.tsx`: Example components demonstrating language handling and consent logic.

## Getting Started
```bash
git clone https://github.com/jaimemendieta/Next-i18n-Starter.git
cd my-app
npm install
# Start the development server
npm run dev
```

## Usage
This project is pre-configured for bilingual (Spanish and English) support. The website automatically presents content in the user's preferred language based on their browser settings. Users can also manually switch languages using the language switcher button. To adapt the project for other languages, modify the `middleware.ts`, `content.ts`, `layout.tsx`, and `languageSwitcher.ts` files accordingly. If EU cookie laws (GDPR) are not applicable to your use case, you can remove the related code.

## Contributing
This project is intended to be a stable starter template, and contributions for expanding it to support more than two languages with a dropdown menu are welcome. However, the core code is meant to remain unchanged to maintain its simplicity and focus.

## License
This project is provided without a specific license, allowing free use, modification, and distribution. It's a community resource intended for educational and practical purposes, without restrictions on its application in personal or commercial projects.
