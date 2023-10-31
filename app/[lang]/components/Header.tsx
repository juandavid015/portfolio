import NavSocials from './NavSocials'
import NavPageSections from './NavSections'
import HeaderContent from './HeaderContent'
import { Locale } from '../../../i18n-config'

// eslint-disable-next-line camelcase
// import cv_en from '../assets/pdf/JUAN_GARZON_WEB_DEVELOPER_EN.pdf'

// import cv_es from '../assets/pdf/JUAN_GARZON_WEB_DEVELOPER_ES.pdf'

const Header = ({ lang }: { lang: Locale }) => {
  return (
    <header className='bg-iris min-h-[70vh]
    flex flex-col items-center sm:p-16 p-8'
    >

      <div className='max-w-[1048px] w-full
      flex flex-col gap-8 h-full relative'
      >
        <NavPageSections lang={lang} />
        <HeaderContent lang={lang} />
        <NavSocials lang={lang} />
      </div>
    </header>
  )
}
export default Header
