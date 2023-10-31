import Link from 'next/link'
import { DownloadIcon, GithubIcon, LinkedinIcon } from './Icons'
import { Locale } from '../../../i18n-config'
import { getDictionary } from '../../../get-dictionary'

const NavSocials = async ({ lang }: { lang: Locale }) => {
  const { header } = await getDictionary(lang)
  return (
    <nav className='flex flex-wrap gap-8'>
      <ul className='flex  gap-8 items-center text-blue-white'>
        <span className='border-purple-blue/50 border-r pr-2'>
          Socials
        </span>
        <li className=''>
          <Link
            className='flex gap-2
                hover:text-green-yellow hover:fill-green-yellow fill-blue-white font-bold
                hover:-translate-y-0.5 transition-all'
            href='https://www.linkedin.com/in/juan-dgr/'
            target='_blank'
          >
            <span>
              Linkedin
            </span>
            <LinkedinIcon
              className='h-[20px]'
            />
          </Link>
        </li>
        <li className=''>
          <Link
            className='flex gap-2
                hover:text-green-yellow hover:fill-green-yellow fill-blue-white font-bold
                hover:-translate-y-0.5 transition-all'
            href='https://github.com/juandavid015'
            target='_blank'
          >
            <span>
              Github
            </span>
            <GithubIcon
              className='h-[20px]'
            />
          </Link>
        </li>
      </ul>
      <Link
        className='px-8 py-3 bg-green-yellow font-bold
            hover:text-blue-dark hover:fill-green-yellow fill-blue-white font-bold
            hover:-translate-y-0.5 transition-all
            flex gap-2 items-center'
        href={lang === 'es' ? '/pdf/JUAN_GARZON_WEB_DEVELOPER_ES.pdf' : '/pdf/JUAN_GARZON_WEB_DEVELOPER_EN.pdf'}
        target='_blank'
        rel='noopener noreferrer'
      >
        <span>
          {header.cv.title}
        </span>
        <DownloadIcon
          className='fill-dark-blue h-[25px]'
        />
      </Link>
    </nav>
  )
}
export default NavSocials
