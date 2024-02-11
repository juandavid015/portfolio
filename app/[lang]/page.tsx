import About from './components/About'
import Header from './components/Header'
// eslint-disable-next-line camelcase

import Skills from './components/Skills'
import Projects from './components/Projects'
import Other from './components/Other'
import Footer from './components/Footer'
import { Locale } from '../../i18n-config'
import NavPageSections from './components/NavSections'

// eslint-disable-next-line camelcase

const IndexPage = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    // eslint-disable-next-line camelcase
    <>
      <NavPageSections lang={lang} />
      <Header lang={lang} />
      <main className='font-heading text-lg md:ml-[300px]'>

        <About lang={lang} />
        <Skills lang={lang} />
        <Projects lang={lang} />
        <Other lang={lang} />

      </main>
      <Footer lang={lang} />
    </>

  )
}

export default IndexPage
