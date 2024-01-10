export const handleLanguageSwitch = (showCookieConsentCallback: () => void, forceSwitch: boolean = false) => {
    const consent = localStorage.getItem('cookieConsent');
    if (!forceSwitch && consent !== 'accepted') {
        showCookieConsentCallback();
        return;
    }

    const currentLocale = document.cookie.split(';').find(cookie => cookie.trim().startsWith('NEXT_LOCALE='))?.split('=')[1];
    const newLocale = currentLocale === 'es' ? 'en' : 'es';

    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; samesite=lax`;
    window.location.reload();
};