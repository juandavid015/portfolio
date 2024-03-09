import Link from 'next/link'
import { Project } from './ProjectCard'
import { ArrowIcon, GithubIcon } from './Icons'
import Image from 'next/image'

interface OtherProject extends Project {
  resume: string;
}

interface OtherProjectCardProps {
  project: OtherProject;
  areaClass: string
}
const OtherProjectCard = ({ project, areaClass }: OtherProjectCardProps) => {
  return (
    <div
      className={`flex flex-col h-fit gap-8 bg-gray-purple
      rounded-md sm:p-12 p-8 items-center
      w-full h-full text-black max-w-full ${areaClass}`}
    >

      <div className='flex flex-col gap-4 w-full '>
        <Link
          href={project.url} target='_blank' style={{ color: project.color }}
          className='w-fit'
        >
          <h3 className='md:text-4xl sm:text-3xl text-2xl font-bold underline underline-1'>
            <span>{`${project.title}`}</span>
          </h3>
          <span>
            {'- ' + project.slug}
          </span>
        </Link>
        <div className='mt-3 flex flex-wrap gap-4 items-center'>
          <Link
            className='fill-dark-blue text-black font-bold flex items-center
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
            className='fill-black text-black font-bold flex items-center
            px-8 py-3 bg-iris flex gap-2 w-fit
            hover:-translate-y-0.5
            transition-all hover:bg-iris
            hover:shadow-[4px_4px_0px_#6951FF]'
            href={project.repository}
            style={{
              backgroundColor: project.color,
              boxShadow: `4px 4px 0px ${project.color}`
            }}
          >
            <span>Github</span>
            <GithubIcon className='h-[20px]' />
          </Link>
        </div>
        <p className='mt-6'>{project.description || project.resume}</p>
      </div>
      <div style={{ color: project.color }} className='flex flex-col w-full gap-1'>
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
        <div
          className='relative max-w-[400px] w-full max-h-[375px]
          sm:h-[225px] h-[225px] cursor-pointer
          flex flex-col item-space-between mx-auto mt-4'
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
              className='w-full h-full object-contain'
              quality={100}
            />
          </Link>

        </div>

      </div>
    </div>
  )
}
export default OtherProjectCard
