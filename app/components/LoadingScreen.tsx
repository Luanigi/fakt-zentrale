'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
export const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prevProgress + 10
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
          initial={{ y: 0, opacity: 1 }}
          exit={{
            y: '100%',
            opacity: 0,
            transition: { duration: 0.5, ease: 'easeInOut' }
          }}
        >
            <div className="flex flex-row items-center">
                <Image src={"/icon.png"} alt="Logo" width={100} height={100} className='mb-6'/>
                <h1 className='md:text-[3rem] text-[2rem] text-white font-extrabold mb-8'>Fakt Zentrale</h1>
            </div>

          <div className="relative w-24 h-24">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                className="text-muted-foreground stroke-current"
                strokeWidth="10"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
              />
              <motion.circle
                className="text-white stroke-current"
                strokeWidth="10"
                strokeLinecap="round"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                initial={{ strokeDasharray: '0 251.2' }}
                animate={{ strokeDasharray: `${progress * 2.512} 251.2` }}
                transition={{ duration: 0.1 }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-semibold text-white">{`${Math.round(progress)}%`}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
