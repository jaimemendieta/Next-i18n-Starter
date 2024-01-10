'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import React, {useEffect, useState} from "react";
import {handleLanguageSwitch} from "@/languageSwitcher";
import CookieConsent from "@/app/[lang]/components/CookieConsent";
import Header from "@/app/[lang]/components/Header";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  const [currentLocale, setCurrentLocale] = useState('en');
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const [pendingLanguageSwitch, setPendingLanguageSwitch] = useState(false);

  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    const lastPart = parts.pop();

    if (lastPart) {
      return lastPart.split(';').shift();
    }

    return null;
  };

  useEffect(() => {
    // Update currentLocale based on the cookie or browser locale
    const localeFromCookie = getCookie('NEXT_LOCALE');
    if (localeFromCookie) {
      setCurrentLocale(localeFromCookie);
    } else {
      const browserLocale = navigator.language;
      if (['en', 'es'].includes(browserLocale)) {
        setCurrentLocale(browserLocale);
      }
    }

    // Update the lang attribute of the html tag
    document.documentElement.lang = currentLocale;

    // Show cookie policy for first time users
    const consent = localStorage.getItem('cookieConsent');
    if (consent === null) {
      setShowCookieConsent(true);
    }
  }, [currentLocale]);

  const showCookieConsentUI = () => {
    setShowCookieConsent(true);
    setPendingLanguageSwitch(true);
  };

  const handleUserDecision = (accepted: boolean) => {
    setShowCookieConsent(false);
    if (accepted) {
      localStorage.setItem('cookieConsent', 'accepted');
      document.cookie = `NEXT_LOCALE=${currentLocale}; path=/; max-age=31536000; samesite=lax`;
      if (pendingLanguageSwitch) {
        handleLanguageSwitch(() => {}, true);
      }
    } else {
      localStorage.setItem('cookieConsent', 'denied');
    }
    setPendingLanguageSwitch(false);
  };

  const onLanguageSwitch = () => {
    handleLanguageSwitch(showCookieConsentUI);
  };
  return (
      <html lang={currentLocale}>
      <body className={inter.className}>
      <Header params={{ lang: currentLocale, onLanguageSwitch }} />
      {children}
      {showCookieConsent && <CookieConsent onDecision={handleUserDecision} params={{ lang: currentLocale }} />}
      </body>
      </html>
  )
}
