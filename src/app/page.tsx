"use client"
import React, { useEffect, useState } from 'react'
import Hero from './_components/Hero'
import About from './_components/About'
import Portofolio from './_components/Portofolio'
//import Client from './_components/Client'
import Blog from './_components/Blog'
import Contact from './_components/Contact'
import Footer from './_components/Footer'
import Link from 'next/link'
import Image from 'next/image' // Import Image dari next/image
import Logo from './_assets/Logo.png';


function Page() {
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
                      <Link href='#' className='text-base text-slate-400 py-2 mx-8 flex group-hover:text-primary'>Home</Link>
                    </li>
                    <li className='group'>
                      <Link href='#' className='text-base text-slate-400 py-2 mx-8 flex group-hover:text-primary'>About</Link>
                    </li>
                    <li className='group'>
                      <Link href='#' className='text-base text-slate-400 py-2 mx-8 flex group-hover:text-primary'>Menu</Link>
                    </li>
                    <li className='group'>
                      <Link href='#' className='text-base text-slate-400 py-2 mx-8 flex group-hover:text-primary'>Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* hero section */}
      <section className='pt-36 pb-32'>
        <Hero />
      </section>
      {/* end hero section */}
      {/* about section */}
      <section className='pt-36 pb-32'>
        <About />
      </section>
      {/* end about section */}
      {/* portofolio section */}
      <section className='pt-36 pb-32 bg-slate-100'>
        <Portofolio />
      </section>
      {/* end portofolio section */}
      {/* client section */}
      <section className='pt-36 pb-32 bg-slate-600'>

      </section>
      {/* end client section */}
      {/* blog section */}
      <section className='pt-36 pb-32'>
        <Blog />
      </section>
      {/* end blog section */}
      {/* contact section */}
      <section className='pt-36 pb-32'>
        <Contact />
      </section>
      {/* end contact section */}
      {/* footer section */}
      <section className='bg-slate-600 pt-24 pb-12'>
        <Footer />
      </section>
      {/* end footer section */}
    </>
  )
}

export default Page
