import Link from 'next/link'
import { GithubIcon, OpenIcon } from './Icons'
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
};
interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProejectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <div
      className='flex flex-col flex-wrap gap-8 hover:bg-purple-blue/20 sm:p-16 p-8
      border border-gray w-full text-black items-center'
    >
      <div
        className='relative max-w-[400px] w-full max-h-[375px]
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

      <div className='max-w-[400px] flex flex-col gap-4 '>
        <Link href={project.url} target='_blank'>
          <h3 className='md:text-4xl text-2xl font-bold underline underline-1'>
            <span className='md:text-6xl text-4xl font-bold'>
              {index + 1 + '.'}
            </span>
            <span>{` ${project.title}`}</span>
          </h3>
        </Link>
        <p>{project.description}</p>
        <div>
          <h4 className='font-bold text-iris'>Techs:</h4>
          <ul className='flex flex-wrap gap-2'>
            {project.technologies.map((tech, index) => {
              return (
                <li className='opacity-80' key={tech + index}>
                  {tech}
                </li>
              )
            })}
          </ul>
          <div className='mt-3 flex gap-4 items-center'>
            <Link
              className='fill-dark-blue text-white font-bold
              px-8 py-3 bg-iris flex gap-2 w-fit
              hover:text-white fill-white font-bold
              hover:-translate-y-0.5
              transition-all hover:bg-iris
              hover:shadow-[4px_4px_0px_#6951FF]'
              href={project.url}
              target='_blank'
            >
              <span>{project.button_visit}</span>
              <OpenIcon className='h-[20px]' />
            </Link>
            <Link
              className='hover:text-blue-dark hover:fill-iris fill-iris font-bold
              hover:-translate-y-0.5 transition-all'
              href={project.repository}
            >
              <GithubIcon className='h-[20px]' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProejectCard
