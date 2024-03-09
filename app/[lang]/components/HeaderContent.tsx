import Image from 'next/image'
import { getDictionary } from '../../../get-dictionary'
import { Locale } from '../../../i18n-config'

const HeaderContent = async ({ lang }: { lang: Locale }) => {
  const { header } = await getDictionary(lang)
  return (
    <div
      className='flex flex-wrap items-center gap-8 justify-center mt-16
    w-full h-full xl:justify-between'
    >
      <div className='max-w-[650px] flex flex-col gap-8 w-fit'>
        <h1 className='inline-flex flex-col gap-4 leading-none font-heading'>
          <span className='text-black xl:text-6xl md:text-5xl text-4xl font-bold'>
            {header.subtitle}
          </span>
          <span
            className='text-iris xl:text-[86px] md:text-7xl sm:text-5xl text-5xl font-bold
           relative z-[10] inline-flex w-fit
'
          >
            {header.title}
          </span>
        </h1>
        <p className='text-black'>{header.description}</p>
      </div>
      <div
        className='relative max-w-[300px] w-full max-h-[360px] h-[360px]
          bg-none flex bg-white before:box-content
          border-black border
          before:absolute before:border before:border-black
           before:top-[8px] before:left-[8px]
          before:h-full before:w-full '
      >
        <Image
          alt='picture of portfolio owner'
          src='/images/profile-pic.webp'
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 900px) 50vw, 33vw'
          className='m-auto object-cover max-w-[240px] max-h-[300px] w-full h-full'
          quality={100}
          priority
        />
      </div>
    </div>
  )
}
export default HeaderContent
