import { getDictionary } from '../../../get-dictionary'
import { Locale } from '../../../i18n-config'
import ProejectCard from './ProjectCard'

const Projects = async ({ lang }: { lang: Locale }) => {
  const { work } = await getDictionary(lang)
  return (
    <section
      id='work'
      aria-label='Projects'
      className='w-full flex justify-center sm:p-16 p-8 bg-iris'
    >
      <div className={`max-w-[1048px] w-full
      flex flex-col md:flex-nowrap flex-wrap gap-8`}
      >
        <h2 className='md:text-5xl text-3xl font-bold text-green-yellow'>
          {work.main.title}
        </h2>
        <div className='flex flex-col gap-16 text-blue-white w-full'>
          {
                work.main.projects.map((project, index) => {
                  return (
                    <ProejectCard
                      key={index}
                      project={project}
                      index={index}
                    />
                  )
                })
            }
        </div>
      </div>
    </section>
  )
}
export default Projects
