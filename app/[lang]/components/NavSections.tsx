'use client'
import Image from 'next/image'
import { MenuIcon, SquareFullFilled, SquareWihtOutlines, XIcon } from './Icons'
import Link from 'next/link'
import SwitchLangBtn from './SwitchLangBtn'
import { Locale } from '../../../i18n-config'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { useState } from 'react'

const sections = ['About', 'Skills', 'Work', 'Contact']

const NavPageSections = ({ lang }: { lang: Locale }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const { scrollYPosition, newSections, sectionIsOnScrollView } = useScrollPosition({ sections })

  return (
    <>
      <button
        className='md:hidden fixed -right-[0] -top-[0] z-[1000]
        block ml-auto w-[50px] h-[50px] bg-dark-blue
        text-white fill-white flex items-center justify-center '
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {
          isExpanded
            ? <XIcon
                className='h-[20px]'
              />
            : <MenuIcon
                className='h-[20px]'
              />
        }

      </button>
      <nav
        className={`md:fixed md:top-0 md:left-0 z-[100] md:bg-transparent
    px-8 md:w-full md:h-[56px] md:max-w-full overflow-hidden px-16
    fixed -right-[2rem] top-0 max-w-[300px] w-full h-full
    flex md:flex-row flex-col gap-12 md:gap-0
    bg-green-yellow md:transition-none transition-all duration-1000 origin-top-right
    md:opacity-100 md:visible
    ${!isExpanded && 'opacity-0 invisible'}`}
      >

        <ul className='relative w-full md:h-full max-w-[1048px] md:m-auto
          flex md:flex-row md:justify-between md:items-center bg-green-yellow
          flex-col gap-6
         '
        >
          <div className='relative h-[100px] w-full md:flex-1
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
          {
              newSections.map((section, index) => {
                return (
                  <li
                    className='font-bold opacity-80 sm:flex-1 sm:ml-0
                    pl-8'
                    key={index}
                  >
                    <Link
                      className='inline-flex gap-2 items-center '
                      href={'#' + section.name.toLowerCase()}
                    >

                      {

                        sectionIsOnScrollView(scrollYPosition, index)
                          ? <SquareFullFilled
                              className='h-[10px] fill-dark-blue rotate-45'
                            />
                          : <SquareWihtOutlines
                              className='h-[10px] fill-dark-blue rotate-45'
                            />
                      }
                      <span>
                        {section.name}
                      </span>
                    </Link>
                  </li>
                )
              })
            }
          <SwitchLangBtn lang={lang} />
        </ul>

      </nav>
    </>
  )
}
export default NavPageSections
