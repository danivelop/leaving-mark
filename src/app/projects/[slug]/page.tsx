import { getMetadata, getMarkdown } from '@/entities/markdown';
import {
  ActionButtons,
  ACTION_NAMESPACE,
  ACTION_TYPE,
} from '@/features/action-button';
import { Utterances } from '@/features/comment';
import { ProjectDetail } from '@/features/project-detil';
import { Space } from '@/shared/ui';

import type { Metadata } from 'next';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const metadata = getMetadata(params.slug, 'projects');

  return {
    title: metadata.title,
    description: metadata.description ?? '',
    openGraph: {
      title: metadata.title,
      description: metadata.description ?? '',
    },
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
