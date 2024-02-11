import { getDictionary } from '../../../get-dictionary'
import { Locale } from '../../../i18n-config'
import ProejectCard from './ProjectCard'

const Projects = async ({ lang }: { lang: Locale }) => {
  const { work } = await getDictionary(lang)
  return (
    <section
      id='work'
      aria-label='Projects'
      className='w-full flex justify-center sm:px-16 px-8 '
    >
      <div
        className={`max-w-[1200px] w-full
      flex flex-col md:flex-nowrap flex-wrap `}
      >
        <h2
          className='md:text-5xl text-3xl font-bold text-black
        p-8 border border-gray border-t-0 border-b-0'
        >
          {work.main.title}
        </h2>
        <p className='px-8'>{work.main.description}</p>
        <div
          className='flex flex-row xl:flex-nowrap flex-wrap
        text-iris w-full
        [&>*:first-child]:border-r-[1px] xl:[&>*:first-child]:border-r-0
        [&>*:first-child]:border-b-0 xl:[&>*:first-child]:border-b-[1px]'
        >
          {work.main.projects.map((project, index) => {
            return <ProejectCard key={index} project={project} index={index} />
          })}
        </div>
      </div>
    </section>
  )
}
export default Projects
