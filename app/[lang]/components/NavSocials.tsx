import Link from 'next/link'
import { DownloadIcon, GithubIcon, LinkedinIcon } from './Icons'
import { Locale } from '../../../i18n-config'
import { getDictionary } from '../../../get-dictionary'

const NavSocials = async ({ lang }: { lang: Locale }) => {
  const { header } = await getDictionary(lang)
  return (
    <nav className='flex flex-wrap gap-8'>
      <ul className='flex  gap-8 items-center text-purple-blue'>
        <span className='border-purple-blue/50 border-r pr-2'>Socials</span>
        <li className=''>
          <Link
            className='flex gap-2
                hover:text-iris hover:fill-iris fill-purple-blue font-bold
                hover:-translate-y-0.5 transition-all'
            href='https://www.linkedin.com/in/juan-dgr/'
            target='_blank'
          >
            <span>Linkedin</span>
            <LinkedinIcon className='h-[20px]' />
          </Link>
        </li>
        <li className=''>
          <Link
            className='flex gap-2
                hover:text-iris hover:fill-iris fill-purple-blue font-bold
                hover:-translate-y-0.5 transition-all'
            href='https://github.com/juandavid015'
            target='_blank'
          >
            <span>Github</span>
            <GithubIcon className='h-[20px]' />
          </Link>
        </li>
      </ul>
      <Link
        className='px-8 py-3 bg-iris font-bold
            hover:text-blue-dark hover:fill-white fill-white font-bold
            hover:-translate-y-0.5
            flex gap-2 items-center text-white
            transition-all hover:bg-iris
            hover:shadow-[4px_4px_0px_#6951FF] '
        href={
          lang === 'es'
            ? '/pdf/JUAN_GARZON_WEB_DEVELOPER_ES.pdf'
            : '/pdf/JUAN_GARZON_WEB_DEVELOPER_EN.pdf'
        }
        target='_blank'
        rel='noopener noreferrer'
      >
        <span>{header.cv.title}</span>
        <DownloadIcon className=' h-[25px]' />
      </Link>
    </nav>
  )
}
export default NavSocials
