'use client';
import Link from 'next/link';
import Image from "next/image";
import React, { useState } from 'react';
import NavLink from './NavLink';
import { Bars3Icon, MinusIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';
import InstagramIcon from './UI/InstagramIcon';
import GithubIcon from './UI/GithubIcon';

const navLinks = [
    {
        title: 'About',
        path: 'about'
    },
    {
        title: 'Projects',
        path: 'projects'
    },
    {
        title: 'Contact',
        path: 'contact'
    },
    {
        title:  (<GithubIcon />),
        path: 'https://github.com/thriwax/'
    },
    {
        title:  (<InstagramIcon />),
        path: 'https://instagram.com/thriwax/'
    }
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    return (
        <nav className='absolute top-0 left-0 right-0 z-10'>
            <div className='flex flex-wrap items-center justify-between mx-auto p-8'>
                <Link href={'/'} className='text-2xl md:text-3xl text-white bg-black font-semibold px-1 xxs:text-xl'>
                    Fedor Tatarintsev
                </Link>
                <div className='mobile-menu block lg:hidden duration-75 delay-150'>
                    {!navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-700 text-slate-600 animate-pulse'>
                            <Bars3Icon className='h-5 w-5 duration-75'/>
                        </button>
                        ) : (
                        <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-700 text-slate-600 animate-pulse'>
                            <MinusIcon className='h-5 w-5'/>
                        </button>)}
                </div>
                <div className='menu hidden lg:block md:w-auto' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 items-center'>
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            ))}
                        
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
        </nav>
    )
};

export default Navbar;