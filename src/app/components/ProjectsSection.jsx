"use client"
import React, { useState, useMemo } from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../utils/projectsData';
import Link from 'next/link';

const ProjectsSection = () => {
    const [visibleProjects, setVisibleProjects] = useState(3);
    const showMore = () => {
        setVisibleProjects(visibleProjects + 6);
    };

    // Мемоизируем список проектов, чтобы избежать повторных вычислений
    const memoizedProjects = useMemo(() => {
        return projectsData.slice(0, visibleProjects).map((project) => (
            <ProjectCard title={project.title} description={project.description} imgUrl={project.image} link={project.link} />
        ));
    }, [visibleProjects]);

    return (
        <div id='projects'>
            <h2 className='text-center text-4xl font-bold text-black mt-4 pb-8'>My Projects</h2>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 my-4 pb-10'>
                {memoizedProjects}
            </div>
            {visibleProjects < projectsData.length && (
                <button
                    onClick={showMore}
                    className='flex mb-8 justify-center m-auto bg-gradient-to-br from-violet-400 to-blue-500 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring focus:border-blue-300 hover:bg-black'
                >
                    More
                </button>
            )}
        </div>
    );
};

export default ProjectsSection;

