import { NextRequest, NextResponse } from 'next/server'
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

let locales = ['en', 'es'];
export let defaultLocale = 'en';

function parseCookies(request: Request) {
    const cookieHeader = request.headers.get('cookie') || '';
    return Object.fromEntries(
        cookieHeader.split(';').map(cookie => {
            const [name, ...rest] = cookie.trim().split('=');
            return [name, decodeURIComponent(rest.join('='))];
        })
    );
}

function getLocale(request: Request): string {
    const headers = new Headers(request.headers)
    const acceptLanguage = headers.get("accept-language")

    if (acceptLanguage) {
        headers.set('accept-language', acceptLanguage.replaceAll("_", "-"))
    }

    const headersObject = Object.fromEntries(headers.entries());
    const languages = new Negotiator({ headers: headersObject }).languages();
    return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
    const cookies = parseCookies(request);
    const cookieLocale = cookies['NEXT_LOCALE'];

    let locale = cookieLocale && locales.includes(cookieLocale)
        ? cookieLocale
        : getLocale(request);

    const pathname = request.nextUrl.pathname

    const newUrl = new URL(`/${locale}${pathname}`, request.nextUrl);

    // e.g. incoming request is /products
    // The new URL is now /en/products
    return NextResponse.rewrite(newUrl)
}

export const config = {
    matcher: [
        '/((?!_next|favicon.ico).*)',
    ],
}