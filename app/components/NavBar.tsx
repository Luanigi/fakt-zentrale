import React, { FC, ChangeEvent } from 'react';
import Image from 'next/image';

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
  return (
    <div className='w-full flex text-white bg-black/40 backdrop-blur-lg absolute m-0 p-5 left-0 shadow-xl'>
      <Image
        src="/icon.png"
        width={40}
        height={35}
        alt=" "
        className='mr-5'
      />
      <p className='text-white text-2xl font-extrabold underline'>Fkt Zntrle</p>

      <select
        value={category}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)}
        className="px-4 py-2 bg-select bg-zinc-900 rounded ml-auto shadow-xl cursor-pointer"
      >
        <option value={categories.wissenschaft}>Wissenschaft</option>
        <option value={categories.geschichte}>Geschichte</option>
        <option value={categories.technologie}>Technologie</option>
      </select>
    </div>
  );
}

export default Nav;
