import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import projects from '../utils/projectsData';

const ProjectPage = () => {
  const [project, setProject] = useState(null);
  const { query } = useRouter();

  useEffect(() => {
    if (query.slug) {
      const foundProject = projects.find((p) => p.id === query.slug);
      setProject(foundProject);
    }
  }, [query.slug]); // Указываем query.slug как зависимость

  return (
    <>
      {project ? (
        <div>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default ProjectPage;
