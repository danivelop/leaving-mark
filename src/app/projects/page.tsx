import { getMarkdowns } from '@/entities/markdown';
import { ProjectList } from '@/features/project-list';
import { TagFilter } from '@/features/tag-filter';
import { Space } from '@/shared/ui';

interface ProjectsPageProps {
  searchParams: {
    tag?: string;
  };
}

function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const projects = getMarkdowns('projects');
  const selectedTag = searchParams.tag;

  return (
    <section>
      <article>
        <TagFilter markdowns={projects} selectedTag={selectedTag} />
      </article>
      <Space className="h-12" />
      <ProjectList projects={projects} selectedTag={selectedTag} />
    </section>
  );
}

export default ProjectsPage;
