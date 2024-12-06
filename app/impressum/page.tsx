"use client";

import Link from "next/link";
import { useState } from "react";
import Nav from "../components/NavBar";

const categories = {
    wissenschaft: 'Wissenschaft',
    geschichte: 'Geschichte',
    technologie: 'Technologie'
  };


export default function About() {
    const [category, setCategory] = useState(categories.wissenschaft);
  return (
    <>
    <div className="bg-cover bg-center h-screen" id="about">
    <Nav category={category} setCategory={setCategory} categories={categories} />

        <main className="text-center text-white bg-cover bg-center flex flex-col items-center justify-center">
            <div className="backdrop-blur-2xl p-10 rounded-lg md:mt-5 mt-20 md:w-3/6 w-11/12 text-wrap text-justify" data-aos="fade-up">
            <h1 className="text-3xl underline pb-2 font-bold text-center">Impressum</h1>
            <ul>
                <li>Faktzentrale 2024</li>
                <li>Luan</li>
            </ul>
            <p className="pt-6 text-center font-extrabold">Gehe zurück zur <Link href="/" className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-600 drop-shadow-lg">Startseite</Link></p>
            </div>
        </main>
    </div>
    </>
  )
}
