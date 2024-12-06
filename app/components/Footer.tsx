"use client";

import Link from "next/link"
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-black text-white" id="contact" data-aos="fade-in">
      <div className="max-w-6xl mx-auto px-4 pt-10 md:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 backdrop-blur-lg bg-black/20 p-8 rounded-2xl">
          <div>
            <h3 className="text-lg font-semibold mb-4">Über mich</h3>
            <p className="text-sm">
                Ich bin ein 16 Jähriger Fullstack Web developer (albaner) aus NRW und ich programmiere
                Websites mit next.js! Wenn was ist schreib mir einfach auf discord brd. Dort 
                heiße ich: shq.ptar 👋 
            </p>
            
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home 🏠
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Über uns 📍
                </Link>
              </li>
              <li>
                <Link href="/#quiz" className="hover:text-white transition-colors">
                  Quizz 🎯
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white transition-colors">
                  Kontakt ✉️
                </Link>
              </li>
              <li>
                <Link href={"/impressum"} className="text-blue-300">
                  Impressum 📄
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Bleib im Kontakt!</h3>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-zinc-950 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <br />
              <button onClick={() =>alert("deine email wurde ERFOLGREICH auf doxbin gepackt!")} className="bg-zinc-900 hover:bg-zinc-800 transition duration-200 ease-in-out rounded-lg p-2 w-full">
                Subscribe
              </button>
            </form>
            <div className="flex space-x-4 mt-4">
              <button onClick={() =>alert("bevor ich facebook habe")}  className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </button>
              <button onClick={() =>alert("so einfach kriegt ihr nicht mein Insta 🤣")}  className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </button>
              <Link href="https://www.youtube.com/@Luqn_code" target="_blank" className="hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <button onClick={() =>alert("twitter zu radikal")} className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white text-sm text-center">
          <p>&copy; {new Date().getFullYear()} | Fakt Zentrale | All rights reserved. (nicht)</p>
        </div>
        <Image src={"/icon.png"} alt="Logo" width={100} height={100} className="flex m-auto opacity-40"/>
      </div>
    </footer>
  )
}