import { getMarkdown } from '@/entities/markdown';
import {
  ActionButtons,
  ACTION_NAMESPACE,
  ACTION_TYPE,
} from '@/features/action-button';
import { Utterances } from '@/features/comment';
import { ProjectDetail } from '@/features/project-detil';
import { Space } from '@/shared/ui';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

function ProjectPage({ params }: ProjectPageProps) {
  const project = getMarkdown(params.slug, 'projects');

  return (
    <section className="layout-width">
      <ActionButtons
        className="justify-end"
        slug={project.slug}
        github={project.metadata.github}
        demo={project.metadata.demo}
        namespace={ACTION_NAMESPACE.PROJECT}
        actionTypes={[ACTION_TYPE.GITHUB, ACTION_TYPE.DEMO]}
      />
      <Space className="h-8" />
      <article>
        <ProjectDetail project={project} />
      </article>
      <Space className="h-16" />
      <Utterances />
    </section>
  );
}

export default ProjectPage;
