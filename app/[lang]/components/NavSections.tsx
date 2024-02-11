'use client'
import Image from 'next/image'
import {
  ArrowIcon,
  GithubIcon,
  LargeArrowIcon,
  LineIcon,
  LinkedinIcon,
  MenuIcon,
  XIcon
} from './Icons'
import Link from 'next/link'
import SwitchLangBtn from './SwitchLangBtn'
import { Locale } from '../../../i18n-config'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { useState } from 'react'

const sections = ['About', 'Skills', 'Work', 'Contact']

const NavPageSections = ({ lang }: { lang: Locale }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const { scrollYPosition, newSections, sectionIsOnScrollView } =
    useScrollPosition({ sections })

  return (
    <>
      <button
        className='md:hidden fixed left-0 -top-[0] z-[1000]
        block ml-auto w-[50px] h-[50px] bg-black
        text-dark fill-white flex items-center justify-center '
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded
          ? (
            <XIcon className='h-[20px]' />
            )
          : (
            <MenuIcon className='h-[20px]' />
            )}
      </button>
      <nav
        className={`fixed md:top-0 top-0 left-0 md:left-0 z-[100] 
    md:w-full md:h-full  overflow-hidden bg-white/90 backdrop-blur
    fixed -right-[2rem] top-0 max-w-[300px] w-full h-full
    flex md:flex-row flex-col gap-12 md:gap-0
    md:transition-none transition-all duration-1000 origin-top-right
    md:opacity-100 md:visible
    ${!isExpanded && 'opacity-0 invisible'}`}
      >
        <ul
          className='relative w-full md:h-full h-full max-w-[300px] p-8
          flex md:flex-col  md:items-left text-dark
          flex-col gap-8 sm:text-xl text-sm bg-white
         '
        >
          <div
            className='relative h-[100px] w-full md:flex-1
        max-h-[100px]'
          >
            <Link
              href='#'
              className='relative inline-flex justify-center
            sm:max-w-[100px] w-full h-full
            '
            >
              <Image
                alt='brand name logo of the author'
                src='/images/brand-name-logo.png'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 900px) 50vw, 33vw'
                className='max-w-[100px]  w-full h-full object-cover'
                quality={100}
              />
            </Link>
          </div>
          {newSections.map((section, index) => {
            return (
              <li
                className={`font-bold opacity-80  sm:ml-0
                    pl-8 transition-all text-dark 
                    ${
                      sectionIsOnScrollView(scrollYPosition, index)
                        ? 'text-dark'
                        : 'text-dark/70'
                    }`}
                key={index}
              >
                <Link
                  className='inline-flex gap-2 items-center '
                  href={'#' + section.name.toLowerCase()}
                >
                  {sectionIsOnScrollView(scrollYPosition, index)
                    ? (
                      <LargeArrowIcon className='h-[40px] fill-dark -rotate-[45deg]' />
                      )
                    : (
                      <LineIcon className='h-[30px] fill-dark/70 rotate-45' />
                      )}
                  <span>{section.name}</span>
                </Link>
              </li>
            )
          })}
          <SwitchLangBtn lang={lang} />
          <ul className='flex flex-col gap-4 text-sm'>
            <li className=''>
              <Link
                href='mailto:juandavidgr1002@gmail.comcom'
                className='flex gap-2 w-fit
              hover:text-iris hover:fill-iris fill-dark
              hover:-translate-y-0.5 transition-all'
              >
                <span>juandavidgr1002@gmail.com</span>
                <ArrowIcon className='h-[15px] -rotate-45 fill-black' />
              </Link>
            </li>

            <li className=''>
              <Link
                className='flex gap-2 w-fit
                hover:text-iris hover:fill-iris fill-purple-blue
                hover:-translate-y-0.5 transition-all'
                href='https://www.linkedin.com/in/juan-dgr/'
                target='_blank'
              >
                <LinkedinIcon className='h-[20px]' />
                <span>Linkedin</span>
              </Link>
            </li>
            <li className=''>
              <Link
                className='flex gap-2 w-fit
                hover:text-iris hover:fill-iris fill-purple-blue
                hover:-translate-y-0.5 transition-all'
                href='https://github.com/juandavid015'
                target='_blank'
              >
                <GithubIcon className='h-[20px]' />
                <span>Github</span>
              </Link>
            </li>
          </ul>
        </ul>
      </nav>
    </>
  )
}
export default NavPageSections
