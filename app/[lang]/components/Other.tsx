import { getDictionary } from '../../../get-dictionary'
import { Locale } from '../../../i18n-config'
import OtherProjectCard from './OtherProjectCard'

const Other = async ({ lang }: { lang: Locale }) => {
  const { work } = await getDictionary(lang)
  return (
    <section
      id='other'
      aria-label='Other'
      className='w-full flex justify-center sm:p-16 p-8 bg-iris sm:pb-32'
    >
      <div className={`max-w-[1048px] w-full
      flex flex-col gap-8`}
      >
        <h2 className='md:text-5xl text-3xl font-bold text-green-yellow'>
          {work.other.title}
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-layoutOherProjects gap-0 gap-y-8
        auto-rows-min h-fit'
        >
          {
            work.other.projects.map((project, index) => {
              return (
                <OtherProjectCard
                  key={index}
                  project={project}
                />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
export default Other
