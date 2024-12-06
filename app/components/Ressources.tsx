import React from 'react'
import Buecher from './Buecher'
import AndereWebsites from './AndereWebsites'

export default function Ressources() {
  return(
    <>
    <div className="h-screen flex flex-col items-center mb-20" id="ressources">
        <h1 data-aos="zoom-in" className='md:text-[3rem] text-2xl font-bold text-center underline text-white mt-12'>Andere Ressourcen für Fakten</h1>
        <Buecher />
        <AndereWebsites/>
    </div>
    </>
    )
}
