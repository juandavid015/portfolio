import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { i18n } from './i18n-config'

import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

// Get the locale language via web user's preferences and match
// against the available locales and returns the best matching locale.
function getLocale (request: NextRequest): string | undefined {
  // Let's say the Accept-Language header is 'en;q=0.8, es, pt'.
  // We use the negotiator library to handle the request and parse Accept-Language.
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales // Available application locales
  const userPreferredLanguages = new Negotiator({ headers: negotiatorHeaders }).languages() // Preferred languages -> ['es', 'en']

  // Find the best matching locale between user preferences and available locales.
  const locale = matchLocale(userPreferredLanguages, locales, i18n.defaultLocale)
  return locale
}

// This middleware handles routing based on the user's preferred language.
// It ensures that the page is served in the user's chosen language.
export function middleware (request: NextRequest) {
  const pathname = request.nextUrl.pathname
  // // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  // // If you have one
  if (
    [
      '/manifest.json',
      '/favicon.ico',
      '/next.svg',
      '/vercel.svg',
      '/images/profile-pic.png',
      '/images/brand-name-logo.png',
      '/pdf/JUAN_GARZON_WEB_DEVELOPER_EN.pdf',
      '/pdf/JUAN_GARZON_WEB_DEVELOPER_ES.pdf'
      // Your other files in `public`
    ].includes(pathname)
  ) { return }
  // Check if the URL is missing a locale segment (e.g., '/en/').
  const pathnameIsMissingLocale = i18n.locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // If the URL is missing a locale, redirect to the appropriate language-specific URL.
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request) // Determine the user's preferred locale
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, // Create a language-specific URL
        request.url
      )
    )
  }
}

export const config = {
  // Matcher for URL paths, ignoring `/_next/`, `/api/`, etc.
  matcher: ['/((?!api|_next/static|_next/image|image|favicon.ico).*)']
}
