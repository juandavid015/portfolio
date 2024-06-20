import { Locale } from '../../../i18n-config'
import { getDictionary } from '../../../get-dictionary'
import { ArrowIcon } from './Icons'
import Link from 'next/link'

const Contact = async ({ lang }: { lang: Locale }) => {
  const { contact } = await getDictionary(lang)
  return (
    <section
      id='contact'
      aria-label='Other'
      className='w-full flex justify-center sm:p-16 p-8
      md:px-0 md:py-16 p-8'
    >
      <div className='md:ml-[230px] max-w-[1280px] md:w-[calc(100%-230px)] w-full
      flex flex-col flex-wrap md:gap-8 gap-4 md:px-6'
      >   <small className='sm:text-base text-sm text-gray'>{'<Contact/>'}</small>
        <h2 className='md:text-7xl sm:text-5xl text-3xl text-black
      font-heading font-regular'
        >{contact.title}
        </h2>
        <div className='w-full flex flex-wrap gap-8'>
          <p>{contact.description}</p>
          <ul className='flex flex-wrap gap-6'>
            <li>
              <Link
                href='mailto:juandavidgr1002@gmail.com'
                className='font-bold flex items-center gap-2
                transition-all hover:-translate-y-0.5
            hover:text-iris hover:fill-iris'
                target='_blank'
              >
                <span>Email</span>
                <ArrowIcon className='h-[20px] -rotate-[45deg]' />
              </Link>
            </li>
            <li>
              <Link
                href='https://github.com/juandavid015'
                className='font-bold flex items-center gap-2
                transition-all hover:-translate-y-0.5
            hover:text-iris hover:fill-iris'
                target='_blank'
              >
                <span>Github</span>
                <ArrowIcon className='h-[20px] -rotate-[45deg]' />
              </Link>
            </li>
            <li>
              <Link
                href='https://www.linkedin.com/in/juan-dgr/'
                className='font-bold flex items-center gap-2
                transition-all hover:-translate-y-0.5
            hover:text-iris hover:fill-iris'
                target='_blank'
              >
                <span>LinkedIn</span>
                <ArrowIcon className='h-[20px] -rotate-[45deg]' />
              </Link>
            </li>
          </ul>
        </div>

      </div>

    </section>
  )
}
export default Contact
