import Link from 'next/link'
import Contact from './Contact'
import { NextJsIcon } from './Icons'
import { Locale } from '../../../i18n-config'

const Footer = ({ lang }: { lang: Locale }) => {
  return (
    <footer
      className='bg-white sm:text-xl text-md
        flex flex-col gap-16 items-center text-black'
    >
      <Contact lang={lang} />
      <div className='w-full sm:p-16 p-8 bg-black text-white
      flex flex-col items-center justify-center font-medium'
      >
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
        <div className='flex flex-col items-center gap-2
        border-t border-purple-blue/30'
        >
          <p>Application made with</p>
          <NextJsIcon className='h-[12px] fill-white' />
        </div>
      </div>
    </footer>
  )
}
export default Footer
