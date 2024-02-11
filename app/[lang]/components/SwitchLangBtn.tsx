'use client'
import Link from 'next/link'
import { Locale, i18n } from '../../../i18n-config'
// import { LanguageIcon } from './Icons'
import { usePathname } from 'next/navigation'

const SwitchLangBtn = ({ lang }: { lang: Locale }) => {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (locale === lang) return '#'
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }
  //   const pathIncludesLocale = pathName.includes(locale)
  return (
    <button
      className='py-3 px-6 text-black fill-black font-bold
        sm:w-fit
        flex gap-2 items-center w-full '
    >
      {/* <LanguageIcon
        className='h-[30px]'
      /> */}
      <span>Language:</span>
      <ul className='flex gap-2'>
        {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              <Link
                className={`py-1 px-2 
                    ${locale !== lang && 'hover:bg-black/60 text-black'}
                    ${locale === lang && 'bg-black text-white'}`}
                href={redirectedPathName(locale)}
              >
                {locale}
              </Link>
            </li>
          )
        })}
      </ul>
    </button>
  )
}
export default SwitchLangBtn
