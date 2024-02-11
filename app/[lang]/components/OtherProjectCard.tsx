import Link from 'next/link'
import { Project } from './ProjectCard'
import { GithubIcon, OpenIcon } from './Icons'
import Image from 'next/image'

interface OtherProject extends Project {
  resume: string;
}

interface OtherProjectCardProps {
  project: OtherProject;
}
const OtherProjectCard = ({ project }: OtherProjectCardProps) => {
  return (
    <div
      className='relative p-8 flex flex-col gap-2
    text-dark w-full  h-full hover:bg-purple-blue/20
    border-gray border  border-r-0 border-b-0 border-t-0'
    >
      <div
        className='relative max-w-full w-[400px] max-h-[375px]
      sm:h-[225px] h-[225px] cursor-pointer'
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
      <Link
        className='w-fit hover:-translate-y-0.5 transition-all hover:fill-iris fill-dark'
        href={project.repository}
        target='_blank'
      >
        <GithubIcon className='h-[20px]' />
      </Link>
      <Link href={project.url} target='_blank'>
        <h3 className='md:text-xl text-2xl font-bold underline '>
          {project.title}
        </h3>
      </Link>
      <p>{project.resume}</p>
      <ul className='flex flex-wrap gap-2'>
        {project.technologies.map((tech, index) => {
          return (
            <li className='text-sm opacity-80' key={index}>
              {tech}
            </li>
          )
        })}
      </ul>
      <Link
        className='absolute bottom-0 translate-y-[50%]
        fill-white text-white font-bold
        px-8 py-3 bg-iris flex gap-2 w-fit
        transition-all hover:bg-iris
        hover:shadow-[4px_4px_0px_#6951FF]
        font-bold
        '
        href={project.url}
        target='_blank'
      >
        <span>{project.button_visit}</span>
        <OpenIcon className='h-[20px]' />
      </Link>
    </div>
  )
}
export default OtherProjectCard
