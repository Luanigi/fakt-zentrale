"use client";

import type { NextPage } from 'next'
import Head from 'next/head'
import Faktzentrale from './components/Faktzentrale'
import Quiz from './components/Quizz'
import ScrollToTop from './components/ScrollToTop'
import Ressources from './components/Ressources'
import Footer from './components/Footer'
import { useState, useEffect } from 'react'
import { LoadingScreen } from './components/LoadingScreen'

const Home: NextPage = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate page load delay
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      <Head>
        <title>Fakt Zentrale</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <LoadingScreen />
      {isLoaded && (
        <>
      <main id="hero">
        <Faktzentrale />
      </main>
      <Quiz         />
      <Ressources   />
      <Footer       />
      <ScrollToTop  />
      </>
      )}
    </div>
  )
}

export default Home
