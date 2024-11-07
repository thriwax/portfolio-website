import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import projects from '../utils/projectsData';

const ProjectPage = () => {
  const [project, setProject] = useState(null);
  const { query, isReady } = useRouter();

  useEffect(() => {
    if (isReady && query.slug) {
      const foundProject = projects.find((p) => p.id === String(query.slug));
      setProject(foundProject);
    }
  }, [isReady, query.slug]);

  return (
    <>
      {project ? (
        <div>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
      ) : (
        <div>404: Проект не найден</div>
      )}
    </>
  );
};

export default ProjectPage;

