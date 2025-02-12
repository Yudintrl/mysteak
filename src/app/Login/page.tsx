"use client"
import React, { useEffect, useState } from 'react'
import Hero from '../_components/Hero'
import About from '../_components/About'
import Portofolio from '../_components/Portofolio'
//import Client from './_components/Client'
import Blog from '../_components/Blog'
import Contact from '../_components/Contact'
import Footer from '../_components/Footer'
import Link from 'next/link'
import Image from 'next/image' // Import Image dari next/image
import Logo from '@/app/_assets/image.png'

function page() {
  const [menu, setMenu] = useState(false)
  const [header, setHeader] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu)
  }

  const scrolHeader = () => {
    if (window.scrollY >= 50) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrolHeader)
    return () => {
      window.removeEventListener('scroll', scrolHeader)
    }
  }, [])

  return (
    <>
    <header className={`${header ? 'fixed bg-white bg-opacity-80 buram' : 'absolute bg-transparent'} top-0 left-0 w-full flex items-center z-10`}>
        <div>
          <div className='container'>
            <div className='flex items-center justify-between h-20 relative'>
              <div className='px-4 flex items-center'>
                <Image src={Logo} alt="BiruSenja Logo" width={60} height={60} />
                <Link className='font-bold text-lg text-primary block p-4' href='/'>My Steak</Link>
              </div>
              <div className='flex items-center justify-center p-4'>
                <button className='block absolute right-4 lg:hidden' onClick={toggleMenu}>
                  <span className={`bg-secondary block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${menu ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                  <span className={`bg-secondary block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm my-0.5 ${menu ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`bg-secondary block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${menu ? '-rotate-45 -translate-y-1' : 'translate-7-0.5'}`}></span>
                </button>
                <nav className={`${!menu ? 'hidden' : 'block'} absolute py-4 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:top-0 lg:block lg:static lg:bg-transparent lg:max-full lg:rounded-none lg:shadow-none`}>
                  <ul className='block lg:flex'>
                    <li className='group'>
                      <Link href='/' className='text-base text-slate-400 py-2 mx-8 flex group-hover:text-primary'>Home</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full bg-white rounded-lg p-8 shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default page