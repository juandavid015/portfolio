import Link from 'next/link'
import { ArrowIcon, GithubIcon } from './Icons'
import Image from 'next/image'

export type Project = {
  title: string;
  description?: string;
  technologies: string[];
  backgroundImage: string;
  otherPreviewImages?: never[];
  url: string;
  repository: string;
  button_visit?: string;
  slug: string;
  color: string;
  resume?: string;
};
interface ProjectCardProps {
  project: Project;
  areaClass: string
}

const ProejectCard = ({ project, areaClass }: ProjectCardProps) => {
  return (
    <div
      className={`flex flex-row-reverse md:flex-nowrap flex-wrap-reverse justify-center
      h-fit gap-8 bg-gray-purple rounded-md sm:p-16 p-8
      w-full h-full text-black max-w-full ${areaClass}`}
    >
      <div
        className='relative w-[300px] max-h-[375px]
      sm:h-[168px] h-[168px] cursor-pointer
      flex flex-col item-space-between rounded-md overflow-hidden'
      >
        <Link
          href={project.url}
          target='_blank'
          className='relative w-full h-full inline-flex'
        >
          <Image
            src={project.backgroundImage}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 900px) 50vw, 33vw'
            alt={`${project.title} screenshot`}
            className='w-full h-full object-cover'
            quality={100}
          />
        </Link>

      </div>
      <div className='flex flex-col gap-6 '>
        <Link
          href={project.url} target='_blank'
          style={{ color: project.color }}
          className='w-fit'
        >
          <h3 className='md:text-4xl sm:text-3xl text-2xl
          font-bold underline underline-1'
          >
            <span>{`${project.title}`}</span>
          </h3>
          <span>
            {'- ' + project.slug}
          </span>
        </Link>
        <div className='flex flex-wrap gap-4 items-center'>

          <Link
            className='fill-dark-blue text-black font-bold
                px-8 py-3 bg-iris flex gap-2 w-fit
                hover:-translate-y-0.5
                transition-all hover:bg-iris
                hover:shadow-[4px_4px_0px_#6951FF]'
            href={project.url}
            target='_blank'
            style={{
              backgroundColor: project.color,
              boxShadow: `4px 4px 0px ${project.color}`
            }}
          >
            <span>{project.button_visit}</span>
            <ArrowIcon className='h-[20px] -rotate-[45deg]' />
          </Link>
          <Link
            className='fill-black text-black font-bold
            px-8 py-3 bg-iris flex gap-2 w-fit
            hover:-translate-y-0.5
            transition-all hover:bg-iris
            hover:shadow-[4px_4px_0px_#6951FF]'
            href={project.repository}
            style={{
              backgroundColor:
              project.color,
              boxShadow: `4px 4px 0px ${project.color}`
            }}
          >
            <span>Github</span>
            <GithubIcon className='h-[20px]' />
          </Link>
        </div>

        <div className='max-w-[500px] flex flex-col gap-4 '>

          <p className='mt-6'>{project.description || project.resume}</p>
          <div style={{ color: project.color }}>
            <h4 className='font-bold '>Techs:</h4>
            <ul className='flex flex-wrap gap-2'>
              {project.technologies.map((tech, index) => {
                return (
                  <li className='opacity-80 text-base' key={tech + index}>
                    {tech}
                  </li>
                )
              })}
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}
export default ProejectCard
