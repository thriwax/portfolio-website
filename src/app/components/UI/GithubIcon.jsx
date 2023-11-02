import gitIcon from '../../../../public/images/github-mark-white.svg';
import Image from 'next/image';
import React from 'react';

const GithubIcon = () => {
  return (
    <div className='flex items-center justify-center bg-gradient-to-r from-violet-400 to-blue-500 shadow-inner p-3 rounded-full hover:bg-slate-400 hover:animate-pulse'><Image src={gitIcon} width={20} height={15}/></div>
  )
}

export default GithubIcon;