import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import projects from '../utils/projectsData';

const ProjectPage = () => {

    const [project, setProject] = useState()
    
    const {query} = useRouter()

    useEffect(() => {
        
        setMix(projects.find((p) => {
            return p.id === query.slug}))

    }, [projects, setProject, query])
    
    
    return (
      <>
        <div>{project?.title}</div>
      </>
    );
  };

  
  export default ProjectPage;