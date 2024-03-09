import NavSocials from './NavSocials'
import HeaderContent from './HeaderContent'
import { Locale } from '../../../i18n-config'

// eslint-disable-next-line camelcase
// import cv_en from '../assets/pdf/JUAN_GARZON_WEB_DEVELOPER_EN.pdf'

// import cv_es from '../assets/pdf/JUAN_GARZON_WEB_DEVELOPER_ES.pdf'

const Header = ({ lang }: { lang: Locale }) => {
  return (
    <header
      className='bg-white min-h-[70vh] relative
    flex flex-col items-center sm:p-16 p-8 font-sans sm:text-xl text-md
    md:px-0 md:py-16 p-8 w-full'
    >

      <div
        className='md:ml-[230px] max-w-[1280px] md:w-[calc(100%-230px-18px)] w-full
      flex flex-col gap-8 h-full relative '
      >
        {/* <NavPageSections lang={lang} /> */}
        <HeaderContent lang={lang} />
        <NavSocials lang={lang} />
      </div>
    </header>
  )
}
export default Header
