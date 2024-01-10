interface DictionaryEntry {
    cookieNotice: string
    cookieConsentMessage1: string
    cookieConsentMessage2: string
    cookieConsentAccept: string
    cookieConsentDeny: string
    headerLanguage: string
    heroTitle: string
}

export const dictionary: Record<string, DictionaryEntry> = {
    en: {
        cookieNotice: "Cookies Notice/Aviso de Cookies",
        cookieConsentMessage1: "Our site automatically adjusts to your language. To manually switch languages, we use a cookie that only tracks your language choice, without storing personal data. Your access to content remains the same, whether you accept or not.",
        cookieConsentMessage2: "Nuestra página se ajusta automáticamente a su idioma. Para cambiar de idioma manualmente, utilizamos una cookie que solo registra su elección de idioma, sin almacenar datos personales. Su acceso al contenido permanece igual, acepte o no.",
        cookieConsentAccept: "Accept/Acceptar",
        cookieConsentDeny: "Deny/Rechazar",
        headerLanguage: "Ver en Español",
        heroTitle: "Hero Title",
    },

    es: {
        cookieNotice: "Aviso de Cookies/Cookies Notice",
        cookieConsentMessage1: "Nuestra página se ajusta automáticamente a su idioma. Para cambiar de idioma manualmente, utilizamos una cookie que solo registra su elección de idioma, sin almacenar datos personales. Su acceso al contenido permanece igual, acepte o no.",
        cookieConsentMessage2: "Our site automatically adjusts to your language. To manually switch languages, we use a cookie that only tracks your language choice, without storing personal data. Your access to content remains the same, whether you accept or not.",
        cookieConsentAccept: "Acceptar/Accept",
        cookieConsentDeny: "Rechazar/Deny",
        headerLanguage: "See in English",
        heroTitle: "Título del Héroe",
    }
}