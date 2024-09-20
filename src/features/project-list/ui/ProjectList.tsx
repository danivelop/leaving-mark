import ProjectItem from './ProjectItem';

import type { Project } from '@/entities/markdown';

interface ProjectListProps {
  projects: Project[];
  selectedTag?: string;
}

function ProjectList({ projects, selectedTag }: ProjectListProps) {
  return (
    <ul className="layout-width grid grid-cols-1 xs:grid-cols-2 gap-8">
      {projects
        .filter(
          (project) =>
            !selectedTag || project.metadata.tags?.includes(selectedTag),
        )
        .map((project) => (
          <ProjectItem key={project.slug} project={project} />
        ))}
    </ul>
  );
}

export default ProjectList;
