import React from 'react'
import Link from "next/link"
import { FaMapPin } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

function Footer() {
    return (
        <>
            <div className='container'>
                <div className='flex flex-wrap'>
                    <div className='w-full px-4 mb-12 text-slate-200 font-medium md:w-1/3'>
                        <h2 className='font-bold text-4xl text-white mb-5'>My Steak</h2>
                        <h3 className='font-bold text-2xl mb-2'>Hubungi Kami</h3>
                        <div className='flex gap-3 items-center'>
                            <FaMapPin />
                            <p>Hertasning Baru Aroepala No . 36</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <BsFillTelephoneFill />
                            <p>0821-3777-5451</p>
                        </div>
                        <hr className='w-60 mt-3 mb-3' />
                        <div className='flex gap-3 items-center'>
                            <FaMapPin />
                            <p>Trans Studio Mall F1 No. 77</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <BsFillTelephoneFill />
                            <p>0821-8821-1171</p>
                        </div>
                    </div>
                    <div className='w-full px-4 mb-12 md:w-1/3'>
                        <h3 className='font-semibold text-xl text-white mb-5'>Kategori</h3>
                        <ul className='text-slate-400'>
                            {/* <li>
                                <Link className='iniline-block text-base hover:text-primary mb-3' href='#'>React.js</Link>
                            </li>
                            <li>
                                <Link className='iniline-block text-base hover:text-primary mb-3' href='#'>Laravel</Link>
                            </li>
                            <li>
                                <Link className='iniline-block text-base hover:text-primary mb-3' href='#'>Next.js</Link>
                            </li> */}
                        </ul>
                    </div>
                    <div className='w-full px-4 mb-12 md:w-1/3'>
                        <h3 className='font-semibold text-xl text-white mb-5'>Tautan</h3>
                        <ul className='text-slate-400'>
                            <li>
                                <Link className='inline-block text-base hover:text-primary mb-3' href='#'>Home</Link>
                            </li>
                            <li>
                                <Link className='inline-block text-base hover:text-primary mb-3' href='#'>About</Link>
                            </li>
                            <li>
                                <Link className='inline-block text-base hover:text-primary mb-3' href='#'>Portofolio</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer