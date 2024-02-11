import Link from 'next/link'
import Contact from './Contact'
import { NextJsIcon } from './Icons'
import { Locale } from '../../../i18n-config'

const Footer = ({ lang }: { lang: Locale }) => {
  return (
    <footer
      className='bg-white
        flex flex-col gap-16 items-center text-black
        md:ml-[300px] mr-auto
        sm:px-16 px-8'
    >
      <Contact lang={lang} />
      <div className='max-w-[1200px] pb-16'>
        <p>
          Built and designed by
          <Link
            className='hover:text-iris hover:fill-iris
            transition-all'
            href='https://github.com/juandavid015'
            target='_blank'
          >
            {' @juandgr'}
          </Link>
        </p>
        <div className='flex flex-col items-center gap-2 border-t border-purple-blue/30'>
          <p>Application made with</p>
          <NextJsIcon className='h-[12px] fill-black' />
        </div>
      </div>
    </footer>
  )
}
export default Footer
