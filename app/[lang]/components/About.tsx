import { getDictionary } from '../../../get-dictionary'
import { Locale } from '../../../i18n-config'
import { BranchsIcon, ComputerIcon, ProgrammingHandsIcon, ScreenDevIcon } from './Icons'

const About = async ({ lang }: { lang: Locale }) => {
  const { about } = await getDictionary(lang)
  return (
    <section
      id='about'
      aria-label='About'
      className='w-full flex justify-center sm:p-16 p-8'
    >
      <div className={`max-w-[1048px] w-full
      flex md:flex-nowrap flex-wrap gap-8`}
      >
        <div>
          <h2 className='md:text-5xl text-3xl font-bold text-iris'>
            {about.title}
          </h2>
          <p className='text-iris'>
            {about.description.paragraph1}
          </p>
          <br />
          <p className='text-iris'>
            {about.description.paragraph2}
          </p>
        </div>
        <div className='m-auto relative fill-green-yellow md:min-w-[300px] w-[200px] md:min-h-[300px] h-[100px]'>
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
