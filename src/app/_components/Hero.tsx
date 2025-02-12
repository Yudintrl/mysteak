import React from 'react';
import Link from 'next/link';
import bg from '@/app/_assets/portofolio/BG_My_steak.png';
import Image from 'next/image';

function Hero() {
    return (
        <div className='relative w-full h-screen flex flex-col items-center justify-center text-center'>
        {/* Background Image */}
        {/* <Image 
            src={bg} 
            alt="Background" 
            layout="fill" 
            objectFit="cover"
            className="absolute inset-0 -z-10"
        /> */}
        
        {/* Konten di atas background */}
        <h1 className='text-base font-semibold text-primary md:text-xl lg:text-2xl mb-4 relative'>
            <span className='block font-bold text-4xl mt-1' style={{ color: 'black' }}>My Steak</span>
        </h1>
        <Link href='#' className='text-base font-bold text-white bg-primary py-3 px-8 rounded-full hover:opacity-70 transition duration-300 ease-in-out mt-4 relative'>
            Hubungi Kami
        </Link>
    </div>
    );
}

export default Hero;