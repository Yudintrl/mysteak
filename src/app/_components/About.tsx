import React from 'react';
import { FaTiktok, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

function About() {
    return (
        <>
            <div className='container'>
                <div className='flex flex-wrap justify-center'>
                    <div className='w-full px-4 mb-10 text-center'>
                        <h4 className='font-bold uppercase text-primary text-lg mb-3'>Tentang Kami</h4>
                        <p className='font-medium text-base text-black max-w-xl lg:text-lg mx-auto'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, impedit suscipit voluptas magni eum repellendus, vitae, amet optio consequatur voluptates culpa repudiandae expedita beatae quibusdam rerum temporibus hic harum sunt.
                        </p>
                    </div>
                    <div className='w-full px-4'>
                        <div className='flex items-center justify-center'>
                            <Link href='#' className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border-slate-300 hover:border-primary hover:text-primary'>
                                <FaTiktok />
                            </Link>
                            <Link href='#' className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border-slate-300 hover:border-primary hover:text-primary'>
                                <FaFacebook />
                            </Link>
                            <Link href='https://www.instagram.com/birusenjaband?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border-slate-300 hover:border-primary hover:text-primary'>
                                <FaInstagram />
                            </Link>
                            <Link href='#' className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border-slate-300 hover:border-primary hover:text-primary'>
                                <FaLinkedin />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;