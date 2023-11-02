import instIcon from '../../../../public/images/instagram.svg';
import Image from 'next/image';
import React from 'react'

const InstagramIcon = () => {
  return (
    <div className='lg:hidden xxs:flex items-center justify-center bg-gradient-to-r from-red-400 to-blue-500 shadow-inner p-3 rounded-full hover:bg-slate-400 hover:animate-pulse'><Image src={instIcon} width={20} height={15}/></div>
  )
}

export default InstagramIcon;