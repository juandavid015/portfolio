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
      className='w-full flex justify-center sm:px-16 px-8'
    >
      <div
        className={`max-w-[1200px] w-full
        flex flex-col gap-4 border border-gray p-8`}
      >
        <h2 className='md:text-5xl text-3xl font-bold text-black'>
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
