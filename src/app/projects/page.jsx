import React, { useMemo } from 'react';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../utils/projectsData';
import Link from 'next/link';

const ProjectsPage = () => {
  const memoizedProjects = useMemo(() => {
    return projectsData.map((project) => (
      <Link key={project.id} href={`/projects/${project.id}`}><ProjectCard title={project.title} description={project.description} imgUrl={project.image} link={project.link} /></Link>
    ));
  }, [projectsData]); // Передаем зависимость projectsData

  return (
    <div className='bg-[#fdfdfd]'>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 my-4 pb-10'>
        {memoizedProjects}
      </div>
    </div>
  );
}

export default ProjectsPage;