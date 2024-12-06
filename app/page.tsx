import type { NextPage } from 'next'
import Head from 'next/head'
import Faktzentrale from './components/Faktzentrale'
import Quiz from './components/Quizz'
import ScrollToTop from './components/ScrollToTop'
import Ressources from './components/Ressources'
import Footer from './components/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Fakt Zentrale</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <main id="hero">
        <Faktzentrale />
      </main>
      <Quiz         />
      <Ressources   />
      <Footer       />
      <ScrollToTop  />
    </div>
  )
}

export default Home
