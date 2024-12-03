"use client";

import NavBar from './NavBar';
import { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const categories = {
  wissenschaft: 'science',
  geschichte: 'history',
  technologie: 'technology',
}

const getRandomFact = (facts: string[]) => {
  return facts[Math.floor(Math.random() * facts.length)]
}

const DailyFact = () => {
  const [fact, setFact] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [category, setCategory] = useState<string>(categories.wissenschaft);

  const fetchFact = async (category: string) => {
    setLoading(true)
    try {
      const response = await fetch('/facts.json')
      const data = await response.json()
      setFact(getRandomFact(data[category]))
    } catch (error) {
      setFact('Failed to fetch fact')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchFact(category)
  }, [category])

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
        <NavBar category={category} setCategory={setCategory} categories={categories} />
        <div className="flex flex-col items-center justify-center h-screen text-white">
          <div className="backdrop-blur-lg bg-black/20 p-6 md:pb-0 rounded-lg shadow-lg text-center md:w-2/4 md:h-2/4 w-3/4 justify-center place-items-center">
            <h1 className="md:text-[4rem] text-[2rem] font-extrabold mb-4 md:pt-12" data-aos="fade-in">🚨 Fakt Zentrale 🚨</h1>

            {loading ? (
            <p className="text-lg">Faktinator ladet...</p>
            ) : (
            <p className="md:text-2xl text-lg bg-blue-500/30 border-2 border-white backdrop-blur rounded-lg p-5 m-5 mb-0 md:w-7/12 w-3/4">{fact}</p>
            )}
          </div>
            
            <button
            className="mt-4 px-6 py-3 rounded-lg font-bold overflow-hidden hover:tranlate-y-1 transition-transform duration-300"
            onClick={() => fetchFact(category)}
            >
            <Image src="/icon.png" width={100} height={100} alt=" " className='rounded-lg bg-opacity-20 backdrop-blur-lg hover:scale-110 transition-transform duration-300 ease-in-out' />
            </button>


        </div>
    </>
  )
}

export default DailyFact
