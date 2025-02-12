import React from 'react';
import { Biru1, Biru2, Biru3 } from '../_assets/portofolio';
import Image from 'next/image';

function Blog() {
  return (
    <>
      <div className='container'>
        <div className='w-full px-4'>
          <div className='max-w-xl mx-auto text-center mb-16'>
            <h4 className='font-semibold text-lg text-primary mb-2'>Menu</h4>
            <h2 className='font-bold text-slate-400 text-3xl mb-4'>Top Seller</h2>
          </div>
        </div>
        <div className='flex flex-wrap'>
          <div className='w-full px-4 lg:w-1/2 xl:w-1/3'>
            <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
              <Image src={Biru1} alt='ravella1' sizes='100vw' />
              <div className='py-8 px-6'>
                <h3 className='block mb-3 font-semibold text-xl text-secondary hover:text-primary truncate'>MENU 1</h3>
                <p className='font-medium text-base mb-4 text-slate-400'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, sunt sequi iste fugit recusandae quasi eum enim impedit dignissimos maxime! Voluptatibus atque iure labore neque optio asperiores mollitia cupiditate corrupti!
                </p>
              </div>
            </div>
          </div>
          <div className='w-full px-4 lg:w-1/2 xl:w-1/3'>
            <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
              <Image src={Biru2} alt='ravella2' sizes='100vw'/>
              <div className='py-8 px-6'>
                <h3 className='block mb-3 font-semibold text-xl text-secondary hover:text-primary truncate'>MENU 2</h3>
                <p className='font-medium text-base mb-4 text-slate-400'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, sunt sequi iste fugit recusandae quasi eum enim impedit dignissimos maxime! Voluptatibus atque iure labore neque optio asperiores mollitia cupiditate corrupti!
                </p>
              </div>
            </div>
          </div>
          <div className='w-full px-4 lg:w-1/2 xl:w-1/3'>
            <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
              <Image src={Biru3} alt='ravella3' sizes='100vw' />
              <div className='py-8 px-6'>
                <h3 className='block mb-3 font-semibold text-xl text-secondary hover:text-primary truncate'>MENU 3</h3>
                <p className='font-medium text-base mb-4 text-slate-400'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, sunt sequi iste fugit recusandae quasi eum enim impedit dignissimos maxime! Voluptatibus atque iure labore neque optio asperiores mollitia cupiditate corrupti!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
