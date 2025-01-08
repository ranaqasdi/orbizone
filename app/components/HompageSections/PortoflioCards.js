"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PortoflioCards = ({ title, description, imageUrl, link }) => {
  return (
    <div className='mx-5 flex flex-col gap-y-5'>
      <div class="bg-cover bg-center h-[400px] rounded-3xl" style={{ backgroundImage: `url('${imageUrl}')` }}></div>
      <div className='flex justify-between px-2'>
        <div>
          <h3 className='font-bold text-2xl'>{title}</h3>
          <h3 className=''>{description}</h3>
        </div>
        <div>
          <Link href={`/${link}`}>
          <i className="bg-purple-700 fa fa-long-arrow-right text-xl text-white -rotate-45 p-5 rounded-full hover:bg-purple-950"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortoflioCards;