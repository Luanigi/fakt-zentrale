// pages/index.tsx
import type { NextPage } from 'next'
import Head from 'next/head'
import Faktzentrale from './components/Faktzentrale'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Daily Fact App</title>
        <meta name="description" content="A simple Daily Fact app built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Faktzentrale />
      </main>
    </div>
  )
}

export default Home
