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
      className='w-full flex flex-wrap gap-8 max-w-[1200px]
      p-8 py-16 border border-gray mx-auto'
    >
      <form
        className='flex-1 w-full flex flex-col gap-8 max-w-[460px] w-[460px]'
        target='_blank'
        action='https://formsubmit.co/juandavidgr1002@gmail.com'
        method='POST'
      >
        <h2 className='md:text-5xl text-3xl font-bold'>{contact.title}</h2>
        <p>{contact.description}</p>
        <label htmlFor='name' className='p-4 border-b border-iris w-full'>
          <input
            className='bg-transparent outline-none w-full text-iris
            placeholder:text-iris'
            type='text'
            name='name'
            id='name'
            placeholder={contact.form.name.placeholder}
          />
        </label>
        <label htmlFor='email' className='p-4 border-b border-iris w-full'>
          <input
            className='bg-transparent outline-none w-full text-iris
            placeholder:text-iris'
            type='email'
            name='email'
            id='email'
            placeholder={contact.form.email.placeholder}
            required
          />
        </label>
        <label htmlFor='message' className='p-4 border-b border-iris w-full'>
          <textarea
            className='bg-transparent outline-none resize-none w-fit text-iris w-full
            placeholder:text-iris'
            name='message'
            id='message'
            placeholder={contact.form.message.placeholder}
            required
            rows={3}
          />
        </label>
        <button
          type='submit'
          className='text-white font-bold py-3 px-8 bg-iris w-fit
          transition-all hover:bg-iris hover:translate-y-0.5
          hover:shadow-[4px_4px_0px_#6951FF]'
        >
          {contact.form.submit.title}
        </button>
      </form>
      <div className='flex-1 flex flex-col gap-8 '>
        <h2 className='md:text-5xl text-3xl font-bold'>
          {contact.extra.title}
        </h2>
        <ul className='flex  gap-8 items-center'>
          <li className=''>
            <Link
              className='flex gap-2
                hover:text-iris hover:fill-iris fill-iris font-bold
                hover:-translate-y-0.5 transition-all'
              href='https://www.linkedin.com/in/juan-dgr/'
              target='_blank'
            >
              <span>Linkedin</span>
              <LinkedinIcon className='h-[20px]' />
            </Link>
          </li>
          <li className=''>
            <Link
              className='flex gap-2
                hover:text-iris hover:fill-iris fill-iris font-bold
                hover:-translate-y-0.5 transition-all'
              href='https://github.com/juandavid015'
              target='_blank'
            >
              <span>Github</span>
              <GithubIcon className='h-[20px]' />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}
export default Contact
