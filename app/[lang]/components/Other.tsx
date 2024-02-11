import { getDictionary } from '../../../get-dictionary'
import { Locale } from '../../../i18n-config'
import OtherProjectCard from './OtherProjectCard'

const Other = async ({ lang }: { lang: Locale }) => {
  const { work } = await getDictionary(lang)
  return (
    <section
      id='other'
      aria-label='Other'
      className='w-full flex justify-center sm:px-16 px-8'
    >
      <div
        className={`max-w-[1200px] w-full
      flex flex-col gap-8 border border-gray
      border-t-0`}
      >
        {/* <h2
          className='md:text-5xl text-3xl font-bold text-black h-0 w-0 opacity-0'
          aria-label='Other projects'
        >
          {work.other.title}
        </h2> */}
        <div
          className='grid grid-cols-1 gap-0 gap-y-8
         sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4
        auto-rows-min h-fit [&>*:first-child]:border-l-0'
        >
          {work.other.projects.map((project, index) => {
            return <OtherProjectCard key={index} project={project} />
          })}
        </div>
      </div>
    </section>
  )
}
export default Other
