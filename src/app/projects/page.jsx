import React, { useMemo } from 'react';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../utils/projectsData';

const ProjectsPage = () => {
  const memoizedProjects = useMemo(() => {
    return projectsData.map((project) => (
      <ProjectCard 
        key={project.id}
        title={project.title}
        description={project.description}
        imgUrl={project.image}
        link={project.link} 
      />
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
