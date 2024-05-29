'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './UI/TabButton';

const TAB_DATA = [
    {
        'title': 'Skills',
        'id': 'skills',
        'content': (
            <div className='flex lg:gap-20 justify-start flex-wrap gap-3.5'>
                <ul className="pl-2 h-[165px]">
                    <li className='flex items-center'><svg class="w-3.5 h-3.5 mr-2 text-blue-500 dark:text-blue-300 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>HTML + CSS</li>
                    <li className='flex items-center'><svg class="w-3.5 h-3.5 mr-2 text-blue-500 dark:text-blue-300 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>React</li>
                    <li className='flex items-center'><svg class="w-3.5 h-3.5 mr-2 text-blue-500 dark:text-blue-300 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>JavaScript</li>
                    <li className='flex items-center'><svg class="w-3.5 h-3.5 mr-2 text-blue-500 dark:text-blue-300 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>Next.JS</li>
                    <li className='flex items-center'><svg class="w-3.5 h-3.5 mr-2 text-blue-500 dark:text-blue-300 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>Sanity</li>
                </ul>
                <ul className="pl-2 h-[165px]">
                <li className='flex items-center'><svg class="w-3.5 h-3.5 mr-2 text-blue-500 dark:text-blue-300 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>Tailwind</li>
                    <li className='flex items-center'><svg class="w-3.5 h-3.5 mr-2 text-blue-500 dark:text-blue-300 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>SASS</li>
                    <li className='flex items-center'><svg class="w-3.5 h-3.5 mr-2 text-blue-500 dark:text-blue-300 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>Wordpress</li>
                    <li className='flex items-center'><svg class="w-3.5 h-3.5 mr-2 text-blue-500 dark:text-blue-300 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>Figma</li>
                    <li className='flex items-center'><svg class="w-3.5 h-3.5 mr-2 text-blue-500 dark:text-blue-300 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>SQL</li>
                </ul>
            </div>
        )
    },
    {
        'title': 'Education',
        'id': 'education',
        'content': (
            <ul className="list-disc pl-2 h-[165px]">
                <li><span className='font-semibold'>Gzhel State Unversity</span> - Bachelor of Design (2022)</li>
                <li><span className='font-semibold'>Yandex Praktikum</span> - 'React-Developer' (2023)</li>
                <li><span className='font-semibold'>Moscow Coding School (GUIDEDAO)</span> - 'Solidity-Developer' (WIP)</li>
            </ul>
        )
    },
    {
        'title': 'Experience',
        'id': 'experience',
        'content': (
            <ul className="list-disc pl-2 h-[165px]">
                <li><a href='https://www.justwebagency.com/' target='_blank' className='font-semibold'>Just Web Agency (CA)</a> - 'Wordpress Developer' (February 2023 - September 2023)</li>
                <li><a href='https://wgg-agency.com/' target='_blank' className='font-semibold'>WGG Agency (UAE)</a> - 'Wordpress Developer' (September 2023 - January 2024)</li>
                <li><a href='https://rosze.ru/' target='_blank' className='font-semibold'>Rostov Electronics Factory</a> - 'Linux Embedded Developer' (January 2024 - March 2024)</li>
            </ul>
        )
    }
]

const AboutSection = () => {

    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

    return (
        <section className='text-black' id='about'>
            <div className='xxs:grid md:flex md:flex-col xxs:items-center lg:grid md:grid-cols-2 gap-8 items-top lg:items-start py-2 px-4 xl:gap-16 sm:py-16'>
                <Image src='/images/about.png' width={550} height={550} className="m-auto" />
                <div className='mt-2 md:mt-0 text-left flex flex-col h-full xxs:order-[-1] lg:order-1'>
                    <h2 className='xxs:text-3xl lg:text-4xl font-bold text-black mb-4 mt-4 xxs:text-center lg:text-start'>About Me</h2>
                    <p className='text-base lg:text-lg xxs:text-center md:text-start'>
                        I'm a full stack web developer with a passion for creating interactive and responsive web applications. I have expirience working with Javascript, React, Next.JS, Sanity, Tailwind, SQL, Wordpress, HTML, CSS and Git. I am a quickly learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create  amazing applications.
                    </p>
                    <div className='flex flex-row mt-8 gap-2 flex-wrap lg:justify-start xxs:justify-center'>
                        <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>{' '}Skills{' '}</TabButton>
                        <TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'}>{' '}Education{' '}</TabButton>
                        <TabButton selectTab={() => handleTabChange('experience')} active={tab === 'experience'}>{' '}Experience{' '}</TabButton>
                    </div>

                    <div className="mt-8 ml-4">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default AboutSection;