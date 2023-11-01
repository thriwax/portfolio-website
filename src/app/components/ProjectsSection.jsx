import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
    {
        id: 1,
        title: 'Music Label Website',
        description: `#NEXT.JS #SCSS`,
        image: '/images/projects/1.png',
        tag: ['All', 'Web'],
        link: 'https://www.xop.su/'
    },
    {
        id: 2,
        title: `Speech Therapy Center Website`,
        description: `#HTML #CSS #JS`,
        image: '/images/projects/2.png',
        tag: ['All', 'Web + Design'],
        link: 'https://mirpoznanija.ru/'
    },
    {
        id: 3,
        title: `Equipment Rental Website`,
        description: `#HTML #SCSS #JS`,
        image: '/images/projects/3.png',
        tag: ['All', 'Web + Design'],
        link: 'https://xn----7sbbrpejcjkehcibuqsd5d.xn--p1ai/'
    },
    {
        id: 4,
        title: `Crypto Wallet Landing Page`,
        description: `#HTML #SCSS #JS`,
        image: '/images/projects/4.png',
        tag: ['All', 'Web'],
        link: 'https://thriwax.github.io/landing-page-crypto-wallet/'
    },
    {
        id: 5,
        title: `NFT Marketplace Landing Page`,
        description: `#HTML #SCSS #JS`,
        image: '/images/projects/5.png',
        tag: ['All', 'Web'],
        link: 'https://thriwax.github.io/landing-page-nft-markteplace/'
    },
    {
        id: 6,
        title: `Portfolio Website`,
        description: `#NEXT.JS #TAILWIND`,
        image: '/images/projects/6.png',
        tag: ['All', 'Web + Design'],
        link: 'https://apple.com/'
    },
    {
        id: 7,
        title: `Instabot Landing Page`,
        description: `#HTML #CSS`,
        image: '/images/projects/7.png',
        tag: ['All', 'Web'],
        link: 'https://thriwax.github.io/landing-page-instabot/'
    },
    {
        id: 8,
        title: `DeKrupe Law Pages`,
        description: `#WORDPRESS #WPBAKERY`,
        image: '/images/projects/8.png',
        tag: ['All', 'Web'],
        link: 'https://dekrupelaw.ca/divorce-lawyers-toronto-gta/'
    },
    {
        id: 9,
        title: `Right Bins Pages`,
        description: `#WORDPRESS #WPBAKERY`,
        image: '/images/projects/9.png',
        tag: ['All', 'Web + Design'],
        link: 'https://rightbins.ca/bobcat-track-loader-rental/'
    }
]

const ProjectsSection = () => {
  return (
    <div id='projects'>
        <h2 className='text-center text-3xl font-bold text-black mt-4 pb-4'>My Projects</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 my-4 pb-20'>
            {projectsData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} link={project.link}/>)}
        </div>
    </div>
  )
}

export default ProjectsSection;