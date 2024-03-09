import React from 'react'
import { getDictionary } from '../../../get-dictionary'
import { Locale } from '../../../i18n-config'
import { ArrowIcon } from './Icons'
import Link from 'next/link'

const About = async ({ lang }: { lang: Locale }) => {
  const { about } = await getDictionary(lang)
  return (
    <section
      id='about'
      aria-label='About'
      className='w-full flex justify-center
      bg-gray-white sm:p-16 p-8
      md:px-0 md:py-16 p-8 '
    >
      <div
        className={`md:ml-[230px] max-w-[1280px] md:w-[calc(100%-230px)] w-full
      flex flex-col md:flex-nowrap flex-wrap md:gap-8 gap-4 
      `}
      >
        <small className='sm:text-base text-sm text-gray'>{'<About/>'}</small>
        <h2 className='md:text-7xl sm:text-5xl text-3xl text-black
        font-heading font-regular '
        >
          {about.title}
        </h2>
        <div className='flex md:flex-row flex-col flew-wrap w-full gap-4'>
          {Object.values(about.description).map((paragraph, idx) => (
            <React.Fragment key={'about-' + idx}>
              <p className='text-black w-fit'>{paragraph}</p>
              <ArrowIcon className='md:h-[50px] h-[20px] fill-black' />
            </React.Fragment>
          ))}
        </div>
        <div
          className='flex flex-wrap gap-4  border-y border-gray
         p-4'
        >
          {about.relatedContent.map((relatedContent, index) => (
            <div key={'related' + index}>

              <h3 className='font-medium'>{relatedContent.title}</h3>
              {
                relatedContent.title === 'Email'
                  ? <Link
                      href='mailto:juandavidgr1002@gmail.com'
                      className='flex items-center gap-2
                      transition-all hover:-translate-y-0.5
                      hover:text-iris hover:fill-iris'
                      target='_blank'
                    >
                    <span>{relatedContent.content}</span>
                    <ArrowIcon className='h-[20px] -rotate-[45deg]' />
                    {/* eslint-disable-next-line react/jsx-closing-tag-location */}
                  </Link>
                  : <p>{relatedContent.content}</p>
              }
            </div>
          ))}
        </div>
        {/* <div className='m-auto relative fill-iris md:min-w-[300px] w-[200px] md:min-h-[300px] h-[100px]'>
          <ScreenDevIcon
            className='md:h-[60px] h-[30px] absolute'
          />
          <BranchsIcon
            className='md:h-[100px] h-[40px] absolute right-0'
          />
          <ProgrammingHandsIcon
            className='md:h-[100px] h-[50px] absolute top-[50%] right-[50%]'
          />
          <ComputerIcon
            className='md:h-[100px] h-[30px] absolute bottom-0 right-0'
          />
        </div> */}
      </div>
    </section>
  )
}
export default About
