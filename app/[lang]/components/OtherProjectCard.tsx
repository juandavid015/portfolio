import Link from 'next/link'
import { Project } from './ProjectCard'
import { GithubIcon, OpenIcon } from './Icons'

interface OtherProject extends Project {
    resume: string
}

interface OtherProjectCardProps {
    project: OtherProject
}
const OtherProjectCard = ({ project }: OtherProjectCardProps) => {
  return (
    <div className='relative p-8 flex flex-col gap-2
    border-iris border text-purple-blue w-full  h-full hover:bg-purple-blue/20 hover:text-blue-white'
    >
      <Link
        className='w-fit hover:-translate-y-0.5 transition-all hover:fill-blue-white fill-purple-blue'
        href={project.repository}
      >
        <GithubIcon
          className='h-[20px]'
        />
      </Link>
      <h3 className='md:text-xl text-2xl font-bold'>
        {project.title}
      </h3>
      <p>
        {project.resume}
      </p>
      <ul className='flex gap-2'>
        {
            project.technologies.map((tech, index) => {
              return (
                <li
                  className='text-sm opacity-80'
                  key={index}
                >
                  {tech}
                </li>
              )
            })
         }
      </ul>
      <Link
        className='absolute bottom-0 translate-y-[50%]
        fill-dark-blue text-dark-blue font-bold
        px-8 py-3 bg-green-yellow flex gap-2 w-fit
        hover:bg-dark-blue hover:text-blue-white hover:fill-blue-white
        font-bold transition-all
        '
        href={project.url}
        target='_blank'
      >
        <span>
          {project.button_visit}
        </span>
        <OpenIcon
          className='h-[20px]'
        />
      </Link>
    </div>
  )
}
export default OtherProjectCard
