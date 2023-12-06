import { getDictionary } from '../../../get-dictionary'
import { Locale } from '../../../i18n-config'
import { BranchsIcon, ComputerIcon, ProgrammingHandsIcon, ScreenDevIcon } from './Icons'

const About = async ({ lang }: { lang: Locale }) => {
  const { about } = await getDictionary(lang)
  return (
    <section
      id='about'
      aria-label='About'
      className='w-full flex justify-center sm:px-16 px-8 '
    >
      <div className={`max-w-[1200px] w-full
      flex md:flex-nowrap flex-wrap gap-8 border border-gray p-8
      border-b-0`}
      >
        <div className='flex flex-col gap-4'>
          <h2 className='md:text-5xl text-3xl font-bold text-black'>
            {about.title}
          </h2>
          <p className='text-black'>
            {about.description.paragraph1}
          </p>
          {/* <br /> */}
          <p className='text-black'>
            {about.description.paragraph2}
          </p>
        </div>
        <div className='m-auto relative fill-iris md:min-w-[300px] w-[200px] md:min-h-[300px] h-[100px]'>
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
        </div>
      </div>
    </section>

  )
}
export default About
