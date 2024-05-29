'use client'
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section className='lg:py-8 lg:mb-[100px]'>
            <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:pt-20 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7 text-center sm:text-left order-1 lg:order-[-1] pt-20">
                    <h1 className='text-[#171717] mb-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-500'>
                            Hello, I'm{' '}
                        </span>
                        <br/>
                        <TypeAnimation
                            sequence={[
                                'Fedor',
                                1000,
                                'Web Developer',
                                1000,
                                'UI/UX Designer',
                                1000,
                            ]}
                            wrapper="span"
                            speed={150}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#393939] text-base sm:text-lg mb-6 lg:text-xl'>
                        I work at the intersection of design and web development.
                    </p>
                    <div>
                        <button className='px-6 py-3 w-full font-bold sm:w-fit rounded-full mr-4 bg-gradient-to-br from-violet-400 to-blue-500 hover:bg-slate-200 text-white shadow-inner hover:animate-pulse'><a href='https://www.linkedin.com/in/fedor-tatarintsev'>Hire Me</a></button>
                        <button className='px-1 py-1 w-full font-bold sm:w-fit rounded-full bg-gradient-to-br from-violet-400 to-blue-500 hover:bg-slate-800 text-black mt-3 shadow-inner'>
                            <span className='block bg-[#f5f5f5] hover:bg-slate-200 rounded-full px-5 py-2'><a href='https://drive.google.com/file/d/1tkSsYVJrqPp0zmmp8jYdVLmTNxs7B1pC/view?usp=sharing'>Download CV</a></span>
                        </button>
                    </div>
                </div>
                <div className="flex justify-center lg:mt-0 lg:col-span-5 lg:flex lg:justify-end">
                    <div className="w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]">
                        <Image
                            src='/images/hero-image.jpg'
                            alt='hero-image'
                            className='object-cover mt-10 float-right shadow-2xl rounded-full'
                            width={350}
                            height={350}
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;