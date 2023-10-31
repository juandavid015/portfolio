import Image from 'next/image'
import { getDictionary } from '../../../get-dictionary'
import { Locale } from '../../../i18n-config'

const HeaderContent = async ({ lang }: { lang: Locale }) => {
  const { header } = await getDictionary(lang)
  return (
    <div className='flex flex-wrap items-center gap-8 md:justify-between justify-center mt-16
    w-full h-full'
    >
      <div className='max-w-[450px] flex flex-col gap-4 w-full'>
        <h1 className='inline-flex flex-col leading-none'>
          <span className='text-purple-blue md:text-6xl text-4xl font-bold'>
            {header.subtitle}
          </span>
          <span className='text-green-yellow md:text-[64px] text-[46px] font-bold'>
            {header.title}
          </span>
        </h1>
        <p className='text-green-yellow'>
          {header.description}
        </p>
      </div>
      <div className='relative max-w-[360px] w-[360px] max-h-[360px] h-[360px]
          bg-dark-blue flex overflow-hidden '
      >
        <Image
          alt='picture of portfolio owner'
          src='/images/profile-pic.webp'
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 900px) 50vw, 33vw'
          className='m-auto object-cover max-w-[300px] max-h-[300px] w-full h-full'
          quality={100}
          priority
        />
      </div>
    </div>
  )
}
export default HeaderContent
