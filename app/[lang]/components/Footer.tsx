import Link from 'next/link'
import Contact from './Contact'
import { NextJsIcon } from './Icons'
import { Locale } from '../../../i18n-config'

const Footer = ({ lang }: { lang: Locale }) => {
  return (
    <footer className='bg-dark-blue
        flex flex-col gap-16 items-center p-16 text-purple-blue
        sm:p-16 p-8'
    >
      <Contact lang={lang} />
      <div>
        <p>
          Built and designed by
          <Link
            className='hover:text-blue-white hover:fill-blue-white
            transition-all'
            href='https://github.com/juandavid015'
            target='_blank'
          >
            {' @juandgr'}
          </Link>
        </p>
        <div className='flex flex-col items-center gap-2 border-t border-purple-blue/30'>

          <p>
            Application made with
          </p>
          <NextJsIcon
            className='h-[12px] fill-blue-white'
          />
        </div>
      </div>
    </footer>
  )
}
export default Footer
