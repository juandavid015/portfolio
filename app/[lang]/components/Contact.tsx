import Link from 'next/link'
import { GithubIcon, LinkedinIcon } from './Icons'
import { Locale } from '../../../i18n-config'
import { getDictionary } from '../../../get-dictionary'

const Contact = async ({ lang }: { lang: Locale }) => {
  const { contact } = await getDictionary(lang)
  return (
    <section
      id='contact'
      aria-label='Other'
      className='w-full flex flex-wrap gap-8 max-w-[1048px]'
    >
      <form
        className='flex-1 w-full flex flex-col gap-8 max-w-[460px] w-[460px]'
        target='_blank'
        action='https://formsubmit.co/juandavidgr1002@gmail.com'
        method='POST'
      >
        <h2 className='md:text-5xl text-3xl font-bold'>
          {contact.title}
        </h2>
        <p>
          {contact.description}
        </p>
        <label
          htmlFor='name'
          className='p-4 border border-purple-blue w-full'
        >
          <input
            className='bg-transparent outline-none w-full text-purple-blue
            placeholder:text-purple-blue'
            type='text'
            name='name'
            id='name'
            placeholder={contact.form.name.placeholder}
          />
        </label>
        <label
          htmlFor='email'
          className='p-4 border border-purple-blue w-full'
        >
          <input
            className='bg-transparent outline-none w-full text-purple-blue
            placeholder:text-purple-blue'
            type='email'
            name='email'
            id='email'
            placeholder={contact.form.email.placeholder}
            required
          />
        </label>
        <label
          htmlFor='message'
          className='p-4 border border-purple-blue w-full'
        >
          <textarea
            className='bg-transparent outline-none resize-none w-fit text-purple-blue w-full
            placeholder:text-purple-blue'
            name='message'
            id='message'
            placeholder={contact.form.message.placeholder}
            required
            rows={3}
          />
        </label>
        <button
          type='submit'
          className='text-dark-blue font-bold py-3 px-8 bg-purple-blue w-fit
          hover:-translate-y-0.5 transition-all hover:bg-blue-white'
        >
          {contact.form.submit.title}
        </button>
      </form>
      <div
        className='flex-1 flex flex-col gap-8 '
      >
        <h2 className='md:text-5xl text-3xl font-bold'>
          {contact.extra.title}
        </h2>
        <ul className='flex  gap-8 items-center'>
          <li className=''>
            <Link
              className='flex gap-2
                hover:text-blue-white hover:fill-blue-white fill-purple-blue font-bold
                hover:-translate-y-0.5 transition-all'
              href='https://www.linkedin.com/in/juan-dgr/'
              target='_blank'
            >
              <span>
                Linkedin
              </span>
              <LinkedinIcon
                className='h-[20px]'
              />
            </Link>
          </li>
          <li className=''>
            <Link
              className='flex gap-2
                hover:text-blue-white hover:fill-blue-white fill-purple-blue font-bold
                hover:-translate-y-0.5 transition-all'
              href='https://github.com/juandavid015'
              target='_blank'
            >
              <span>
                Github
              </span>
              <GithubIcon
                className='h-[20px]'
              />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}
export default Contact
