"use client";

import React, { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

interface Categories {
  wissenschaft: string;
  geschichte: string;
  technologie: string;
}

interface NavProps {
  category: string;
  setCategory: (category: string) => void;
  categories: Categories;
}

const Nav: FC<NavProps> = ({ category, setCategory, categories }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav
      className={`w-full flex text-white sticky top-0 z-50 ${scrolled ? 'bg-black' : 'bg-black/40'} z-[99] backdrop-blur-lg m-0 top-0 shadow-4xl transition-colors duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
        <Link href="/" className='flex'>
          <Image
            src="/icon.png"
            width={40}
            height={35}
            alt="Logo"
            className="rounded-full mr-5"
          />
          
          <h1 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-600">
            Fkt Zntrle
          </h1>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Select onValueChange={setCategory}>
            <SelectTrigger className="px-4 py-2 bg-neutral-900 rounded ml-auto shadow-xl w-40 cursor-pointer focus:outline-none focus:ring-0">
              <SelectValue placeholder={category} />
            </SelectTrigger>
            <SelectContent className="z-[999] bg-zinc-900 text-white">
              <SelectItem value={categories.wissenschaft}>Wissenschaft</SelectItem>
              <SelectItem value={categories.geschichte}>Geschichte</SelectItem>
              <SelectItem value={categories.technologie}>Technologie</SelectItem>
            </SelectContent>
          </Select>
          <Button className='bg-zinc-900'>
            <Link href="/about">About</Link>
          </Button>
          <Button className='bg-zinc-900'>
            <Link href="/#contact">Kontakt</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="backdrop-blur-lg bg-black/30 focus:bg-black/30 md:hidden">
              <Menu className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only mr-3">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className='bg-zinc-900 text-white z-[999] w-full outline-none border-none'>
            <div className="flex flex-col space-y-4 mt-4 ">
              <Select onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder={category} />
                </SelectTrigger>
                <SelectContent className="z-[999] bg-zinc-900 text-white">
                  <SelectItem value={categories.wissenschaft}>Wissenschaft</SelectItem>
                  <SelectItem value={categories.geschichte}>Geschichte</SelectItem>
                  <SelectItem value={categories.technologie}>Technologie</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className='bg-zinc-900'>
                <Link href="/about">About</Link>
              </Button>
              <Button variant="outline" className='bg-zinc-900'>
                <Link href="/#contact">Kontakt</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
};

export default Nav;
