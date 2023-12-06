import { getDictionary } from '../../../get-dictionary'
import { Locale } from '../../../i18n-config'
import { techs } from '../../db'
import GenerateTechIcon from './GenerateTechIcon'

const Skills = async ({ lang }: { lang: Locale }) => {
  const allTechs = Object.values(techs).flat()
  const { skills } = await getDictionary(lang)
  return (
    <section
      id='skills'
      aria-label='Skills'
      className='w-full flex justify-center sm:px-16 px-8'
    >
      <div className={`max-w-[1200px] w-full
        flex flex-col gap-8 border border-gray p-8`}
      >
        <h2 className='md:text-5xl text-3xl font-bold text-black'>
          {skills['title:']}
        </h2>
        <ul className='flex flex-wrap gap-8 w-full '>
          {
            allTechs.map((tech, index) => {
              return (
                <li
                  key={index}
                  className='
                  flex flex-row gap-2'
                >
                  <span className=' flex'>
                    <GenerateTechIcon
                      iconName={tech}
                      className='h-[30px] fill-dark-blue m-auto'
                    />
                  </span>
                  <span className='m-auto text-dark-blue font-medium'>
                    {tech}
                  </span>

                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}
export default Skills
