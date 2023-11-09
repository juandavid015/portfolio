import type { Metadata } from 'next'
import './globals.css'
import React from 'react'
import { Locale, i18n } from '../../i18n-config'
import { anekKannada } from '../fonts'

export const metadata: Metadata = {
  title: 'juandgr: Web Developer',
  description: 'Generated by create next app',
  icons: {
    icon: '/images/icon.png'
  }
}

export async function generateStaticParams () {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout ({
  children,
  params
}: {
    children: React.ReactNode,
    params: { lang: Locale }
}) {
  return (
    <html lang={params.lang} className='scroll-smooth' style={{ scrollBehavior: 'smooth' }}>
      <body className={`${anekKannada.variable} font-sans`}>{children}</body>
    </html>
  )
}
