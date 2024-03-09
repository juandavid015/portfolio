import { getDictionary } from '../../../get-dictionary'
import { Locale } from '../../../i18n-config'
import OtherProjectCard from './OtherProjectCard'
// import OtherProjectCard from './OtherProjectCard'
import ProejectCard from './ProjectCard'

const Projects = async ({ lang }: { lang: Locale }) => {
  const { work } = await getDictionary(lang)
  return (
    <section
      id='work'
      aria-label='Projects'
      className='w-full flex justify-center sm:p-16 p-8
      md:px-0 md:py-16 p-8'
    >
      <div
        className={`md:ml-[230px] max-w-[1280px] md:w-[calc(100%-230px)] w-full
      flex flex-col md:flex-nowrap flex-wrap md:gap-8 gap-4 
      `}
      >
        <small className='sm:text-base text-sm text-gray'>{'<Projects/>'}</small>
        <h2
          className='md:text-7xl sm:text-5xl text-3xl text-black
          font-heading font-regular
         '
        >
          {work.main.title}
        </h2>
        <p>{work.main.description}</p>
        <div
          className='text-iris w-full gap-4
          grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1
        '
        >

          <ProejectCard
            key='main_project-1'
            project={work.main.projects[0]}
            areaClass='xl:col-start-1 xl:col-end-3 xl:row-start-1 xl:row-end-2
            sm:col-start-1 sm:col-end-3 sm:row-start-1 sm:row-end-2'
          />
          <ProejectCard
            key='main_project-2'
            project={work.main.projects[1]}
            areaClass='xl:col-start-1 xl:col-end-3 xl:row-start-2 xl:row-end-4
            sm:col-start-1 sm:col-end-3 sm:row-start-2 sm:row-end-3'
          />

          <OtherProjectCard
            key='other_project-1'
            project={work.other.projects[0]}
            areaClass='xl:col-start-3 xl:col-end-4 xl:row-start-1 xl:row-end-3
            sm:col-start-1 sm:col-end-2 sm:row-start-3 sm:row-end-4'
          />
          <OtherProjectCard
            key='other_project-2'
            project={work.other.projects[1]}
            areaClass='xl:col-start-3 xl:col-end-4 xl:row-start-3 xl:row-end-5
            sm:col-start-2 sm:col-end-3 sm:row-start-3 sm:row-end-4'
          />
          <OtherProjectCard
            key='other_project-3'
            project={work.other.projects[2]}
            areaClass='xl:col-start-1 xl:cold-end-2 xl:row-start-4 xl:row-end-6
            sm:col-start-1 sm:col-end-2 sm:row-start-4 sm:row-end-5'
          />
          <OtherProjectCard
            key='other_project-4'
            project={work.other.projects[3]}
            areaClass='xl:col-start-2 xl:cold-end-3 xl:row-start-4 xl:row-end-6
            sm:col-start-2 sm:col-end-3 sm:row-start-4 sm:row-end-5'
          />

        </div>
      </div>
    </section>
  )
}
export default Projects
