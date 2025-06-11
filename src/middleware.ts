import { NextRequest, NextResponse } from 'next/server';

const SUPPORTED_LOCALES = ['en', 'fr', 'de', 'it'];
const DEFAULT_LOCALE = 'en';

function getLocale(request: NextRequest): string {
    const acceptLang = request.headers.get('accept-language') || '';
    const preferred = acceptLang.split(',').map(part => part.split(';')[0].trim());

    for (const lang of preferred) {
        const base = lang.split('-')[0];
        if (SUPPORTED_LOCALES.includes(base)) return base;
    }

    return DEFAULT_LOCALE;
}

export function middleware(request) {
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl

    console.log('test', pathname)

    const pathnameHasLocale = SUPPORTED_LOCALES.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return

    // Redirect if there is no locale
    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        '/((?!_next|.*\\.svg$|.*\\.ico$).*)',
    ],
}
