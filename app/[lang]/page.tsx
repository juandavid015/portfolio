import About from './components/About'
import Header from './components/Header'
// eslint-disable-next-line camelcase

import Skills from './components/Skills'
import Projects from './components/Projects'
import Other from './components/Other'
import Footer from './components/Footer'
import { anekKannada } from '../fonts'
import { Locale } from '../../i18n-config'

// eslint-disable-next-line camelcase

const IndexPage = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    // eslint-disable-next-line camelcase
    <>
      <Header lang={lang} />
      <main className={`${anekKannada.variable} font-sans`}>

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
