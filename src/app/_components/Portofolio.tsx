import React from 'react'
import ravella1 from '@/app/_assets/portofolio/ravella1.jpg'
import ravella2 from '@/app/_assets/portofolio/ravella2.jpg'
import ravella3 from '@/app/_assets/portofolio/ravella3.jpg'
import Band from '@/app/_assets/portofolio/Band.jpg'
import Image from 'next/image'
import { lth1, lth2, lth3 } from '../_assets/portofolio'
function Portofolio() {
    return (
        <>
            <div className='container'>
                <div className='w-full px-4'>
                    <div className='max-w-xl mx-auto text-center mb-16'>
                        <h4 className='font-semibold text-lg text-primary mb-2'>Galery</h4>
                        <h2 className='font-bold text-slate-400 text-3xl mb-4'>ALL ABOUT US</h2>
                        <p className='font-medium text-md text-black'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quisquam natus qui sed necessitatibus accusamus perferendis odio officia amet, architecto, temporibus est maiores delectus atque officiis, sapiente impedit expedita distinctio!
                        </p>
                    </div>
                </div>
                <div className='w-full px-4 flex flex-wrap justify-center xl'>
                    <div className='mb-12 p-4 md:w-1/2'>
                        <div className='rounded-md overflow-hidden shadow-2xl transition-transform duration-300 transform hover:scale-105'>
                            <Image src={lth1} alt='ravella1' sizes='100w' />
                        </div>
                        <h3 className='font-bold text-xl text-primary mt-5 mb-3'> image </h3>
                        <p className='font-medium text-base text-slate-400'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, a? Perferendis aliquam eligendi ipsa sed nihil incidunt, eos dolor reiciendis, iusto dicta iste. Exercitationem, maxime maiores totam fugiat autem nulla.
                        </p>
                    </div>
                    <div className='mb-12 p-4 md:w-1/2'>
                        <div className='rounded-md overflow-hidden shadow-2xl transition-transform duration-300 transform hover:scale-105'>
                            <Image src={lth2} alt='ravella1' sizes='100w' className='shadow-md' />
                        </div>
                        <h3 className='font-bold text-xl text-primary mt-5 mb-3'> image </h3>
                        <p className='font-medium text-base text-slate-400'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus vero molestiae similique inventore incidunt corporis quos repudiandae aliquam quaerat culpa qui natus facilis veritatis at fuga, sint aut, magnam repellat!
                        </p>
                    </div>
                    <div className='mb-12 p-4 md:w-1/2'>
                        <div className='rounded-md overflow-hidden shadow-2xl transition-transform duration-300 transform hover:scale-105'>
                            <Image src={lth3} alt='ravella1' sizes='100w' className='shadow-md' />
                        </div>
                        <h3 className='font-bold text-xl text-primary mt-5 mb-3'>image</h3>
                        <p className='font-medium text-base text-slate-400'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, a? Perferendis aliquam eligendi ipsa sed nihil incidunt, eos dolor reiciendis, iusto dicta iste. Exercitationem, maxime maiores totam fugiat autem nulla.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portofolio