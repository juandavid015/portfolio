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
      className='text-black fill-black
        sm:w-fit
        flex gap-2 items-center w-full flex-wrap '
    >
      {/* <LanguageIcon
        className='h-[30px]'
      /> */}
      <span>Language:</span>
      <ul className='flex gap-2 flex-wrap'>
        {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              <Link
                className={`py-1 px-2 
                    ${locale !== lang && 'hover:border-b border-black/30 text-black/70'}
                    ${locale === lang && 'border-b text-black'}`}
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
