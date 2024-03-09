import { getDictionary } from '../../../get-dictionary'
import { Locale } from '../../../i18n-config'
import { techs } from '../../db'
import { XIcon } from './Icons'

const Skills = async ({ lang }: { lang: Locale }) => {
  const allTechs = Object.values(techs).flat()
  const { skills } = await getDictionary(lang)
  return (
    <section
      id='skills'
      aria-label='Skills'
      className='w-full flex justify-center sm:p-16 p-8
      md:px-0 md:py-16 p-8'
    >
      <div
        className={`md:ml-[230px] max-w-[1280px] md:w-[calc(100%-230px)] w-full
        flex flex-col md:gap-8 gap-4 `}
      >
        <small className='sm:text-base text-sm text-gray'>{'<Skills/>'}</small>
        <h2 className='md:text-7xl sm:text-5xl text-3xl text-black
        font-heading font-regular'
        >
          {skills['title:']}
        </h2>
        <p>{skills.description}</p>
        <ul className='flex flex-wrap gap-8 w-full'>
          {allTechs.map((tech, index) => {
            return (
              <li
                key={index}
                className='
                  flex flex-row gap-2 font-medium
                  text-black fill-black  border-black'
              >
                <span className=' flex'>
                  <XIcon className='h-[5px]  m-auto -rotate-45' />
                </span>
                <span className='m-auto font-medium'>{tech}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
export default Skills
