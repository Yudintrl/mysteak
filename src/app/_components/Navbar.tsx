"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from "react-icons/io";
import Foto from '../_assets/Yu.png';

function Navbar() {
  const[menu,setMenu]=useState(false)
  const handleMenu=()=> setMenu(!menu)

  return (
    <>
    <nav className="bg-white shadow-md border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="https://instagram.com/911zzas" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src={Foto} alt="BiruSenja Logo" width={40} height={40} />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href='/' className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
            </li>
            <li>
              <Link href='/about' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
            </li>
            <li>
              <Link href='/profil' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Menu</Link>
            </li>
            <li>
              <Link href='/berita' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Berita</Link>
            </li>
          </ul>
        </div>
        <div>
          <button onClick={handleMenu} className='inline-flex items-center justify-center md:hidden'>
            {
              !menu ? <GiHamburgerMenu size={30} />
              :
              <IoMdClose size={30}/>
            }
          </button>
        </div>
      </div>
      {
        menu && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              <Link href='/' className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
              <Link href='/about' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
              <Link href='/profil' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Profile</Link>
              <Link href='/berita' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Berita</Link>
            </div>
          </div>
        )
      }
    </nav>
    </>
  )
}

export default Navbar
