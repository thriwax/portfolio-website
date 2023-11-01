import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ProjectCard = ({ imgUrl, title, description, link }) => {

  return (
    <div>
        <div className='h-52 md:h-72 rounded-t-xl relative group shadow-[inset_-12px_-8px_40px_#46464620]' style={{ background: `url(${imgUrl})`, backgroundSize: 'cover', backgroundPosition: 'top' }}>
            <div className='overlay items-center justify-center absolute top-0 w-full h-full rounded-t-xl bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
                <Link href={link} className='h-14 w-14 border-2 relative rounded-full border-white hover:border-slate-300 group/link'>
                    <EyeIcon className='h-10 w-10 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-slate-300'/>
                </Link>
            </div>
        </div>
        <div className='text-black rounded-b-xl bg-[#e3e3e3] px-4 py-6'>
            <h5 className='text-xl font-semibold mb-2'>{title}</h5>
            <p className='font-bold text-xs'>{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard;