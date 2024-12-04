// pages/index.tsx
import type { NextPage } from 'next'
import Head from 'next/head'
import Faktzentrale from './components/Faktzentrale'
import Test from './components/Test'

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
      <Test />
    </div>
  )
}

export default Home
