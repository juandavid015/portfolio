'use client'
import Image from 'next/image'
import {
  ArrowIcon,
  MenuIcon,
  XIcon
} from './Icons'
import Link from 'next/link'
import SwitchLangBtn from './SwitchLangBtn'
import { Locale } from '../../../i18n-config'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { useState } from 'react'

const sections = ['About', 'Work', 'Skills', 'Contact']

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
    md:w-full md:h-full  overflow-hidden md:bg-transparent bg-white
    fixed -right-[2rem] top-0 max-w-[230px] w-full h-full
    flex md:flex-row flex-col gap-12 md:gap-0 
    md:transition-none transition-all duration-1000 origin-top-right
    md:opacity-100 md:visible
    ${!isExpanded && 'opacity-0 invisible'}`}
      >
        <ul
          className={`relative w-full md:h-full h-full max-w-[230px] p-8
          flex md:flex-col md:items-left items-center text-dark md:text-xl  
          flex-col gap-12 `}

        >
          <div
            className='relative h-[70px] w-full md:flex-1
        max-h-[70px]'
          >
            <Link
              href='#'
              className='relative inline-flex justify-center
            sm:max-w-[70px] w-full h-full
            '
            >
              <Image
                alt='brand name logo of the author'
                src='/images/brand-name-logo.png'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 900px) 50vw, 33vw'
                className='max-w-[70px]  w-full h-full object-cover'
                quality={100}
              />
            </Link>
          </div>
          {newSections.map((section, index) => {
            return (
              <li
                className={`font-regular opacity-80  sm:ml-0
                     transition-all text-dark 
                    ${
                      sectionIsOnScrollView(scrollYPosition, index)
                        ? 'text-dark translate-x-2 font-medium'
                        : 'text-dark/70'
                    }`}
                key={index}
              >
                <Link
                  className={`
                  inline-flex gap-2 items-center`}
                  href={'#' + section.name.toLowerCase()}
                >

                  <ArrowIcon className='h-[20px] fill-dark -rotate-[45deg]' />
                  <span className='decoration-1 underline underline-offset-8'>{section.name}</span>
                </Link>
              </li>
            )
          })}
          <SwitchLangBtn lang={lang} />
        </ul>
      </nav>
    </>
  )
}
export default NavPageSections
