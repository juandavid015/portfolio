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
    flex flex-col items-center sm:p-16 p-8 font-heading md:ml-[300px]'
    >
      <div
        className='absolute after:absolute after:top-0 after:left-[5%]
      after:w-[1px] after:h-[70vh] after:bg-gray w-full h-[70vh]
      before:absolute before:top-[5%] before:left-0 before:w-full
      before:bg-gray before:h-[1px]'
        aria-hidden
      />
      <div
        className='absolute after:absolute after:top-0 after:left-[35%]
      after:w-[1px] after:h-[70vh] after:bg-gray w-full h-[70vh]
      before:absolute before:top-[35%] before:left-0 before:w-full
      before:bg-gray before:h-[1px]'
        aria-hidden
      />
      <div
        className='absolute after:absolute after:top-0 after:left-[50%]
      after:w-[1px] after:h-[70vh] after:bg-gray w-full h-[70vh]
      before:absolute before:top-[50%] before:left-0 before:w-full
      before:bg-gray before:h-[1px]'
        aria-hidden
      />
      <div
        className='absolute after:absolute after:top-0 after:left-[75%]
      after:w-[1px] after:h-[70vh] after:bg-gray w-full h-[70vh]
      before:absolute before:top-[75%] before:left-0 before:w-full
      before:bg-gray before:h-[1px]'
        aria-hidden
      />

      <div
        className='max-w-[1200px] w-full
      flex flex-col gap-8 h-full relative'
      >
        {/* <NavPageSections lang={lang} /> */}
        <HeaderContent lang={lang} />
        <NavSocials lang={lang} />
      </div>
    </header>
  )
}
export default Header
