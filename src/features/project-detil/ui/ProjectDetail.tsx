import { Calendar } from 'lucide-react';
import Image from 'next/image';

import { FullMarkdown } from '@/entities/markdown';
import { Badge, Space, AbsoluteDate } from '@/shared/ui';

import type { Project } from '@/entities/markdown';

interface ProjectDetailProps {
  project: Project;
}

function ProjectDetail({ project }: ProjectDetailProps) {
  const imageSrc = project.metadata.image ?? '/images/default.png';

  return (
    <div className="word-style flex flex-col">
      <h1 className="text-2xl xs:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">
        {project.metadata.title}
      </h1>
      <Space className="h-2" />
      {project.metadata.startedAt && (
        <div className="flex items-center text-zinc-500 dark:text-zinc-400 text-sm xs:text-base">
          <Calendar className="size-4 mr-2" />
          <AbsoluteDate date={project.metadata.startedAt} />
          {' ~ '}
          {project.metadata.endedAt ? (
            <AbsoluteDate date={project.metadata.endedAt} />
          ) : (
            'Present'
          )}
        </div>
      )}
      <Space className="h-4" />
      {project.metadata.tags && (
        <>
          <div className="w-full overflow-x-auto hide-scrollbar">
            <ul className="flex flex-nowrap gap-2 min-w-fit">
              {project.metadata.tags.map((tag) => (
                <li key={tag}>
                  <Badge className="bg-theme-700 text-xs xs:text-sm px-[10px] py-[2px] text-zinc-100 border-theme-700">
                    {tag}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
          <Space className="h-4" />
        </>
      )}
      <Image
        src={imageSrc}
        className="w-full min-w-full aspect-[3/2] object-cover object-center rounded-lg"
        width="300"
        height="200"
        alt={`${project.metadata.title} image`}
      />
      <Space className="h-6 xs:h-8" />
      <FullMarkdown content={project.content} />
    </div>
  );
}

export default ProjectDetail;
