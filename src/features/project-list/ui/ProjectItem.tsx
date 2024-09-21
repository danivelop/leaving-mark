import Image from 'next/image';
import Link from 'next/link';

import { ThumbMarkdown } from '@/entities/markdown';
import { Card, CardContent, Badge, AbsoluteDate, Space } from '@/shared/ui';

import type { Project } from '@/entities/markdown';

interface ProjectItemProps {
  project: Project;
}

function ProjectItem({ project }: ProjectItemProps) {
  const imageSrc = project.metadata.image ?? '/post-image/default.png';
  const thumbMarkdown = <ThumbMarkdown content={project.content} />;

  return (
    <li className="group">
      <Link href={`/projects/${project.slug}`}>
        <Card className="overflow-hidden bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700">
          <div className="relative flex items-center h-48 overflow-hidden">
            <Image
              src={imageSrc}
              width={342}
              height={192}
              alt={`${project.metadata.title} image`}
              className="w-full min-w-full aspect-[4/3] object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden md:flex flex-col justify-between absolute inset-0 p-4 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300">
              {!!project.content && (
                <div className="line-clamp-3 word-style text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {thumbMarkdown}
                </div>
              )}
              {project.metadata.startedAt && (
                <p className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <AbsoluteDate date={project.metadata.startedAt} />
                  {' ~ '}
                  {project.metadata.endedAt ? (
                    <AbsoluteDate date={project.metadata.endedAt} />
                  ) : (
                    'Present'
                  )}
                </p>
              )}
            </div>
          </div>
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              {project.metadata.title}
            </h2>
            <Space className="h-1" />
            {!!project.content && (
              <div className="md:hidden line-clamp-3 word-style text-zinc-600 dark:text-zinc-300 text-sm">
                {thumbMarkdown}
              </div>
            )}
            <Space className="h-4 md:h-1" />
            <div className="flex items-center justify-between gap-2">
              {project.metadata.startedAt && (
                <p className="md:hidden min-w-fit text-xs text-zinc-500 dark:text-zinc-400">
                  <AbsoluteDate date={project.metadata.startedAt} />
                  {' ~ '}
                  {project.metadata.endedAt ? (
                    <AbsoluteDate date={project.metadata.endedAt} />
                  ) : (
                    'Present'
                  )}
                </p>
              )}
              {project.metadata.tags && (
                <div className="flex flex-nowrap md:flex-wrap gap-2 overflow-x-auto hide-scrollbar">
                  {project.metadata.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="text-[10px] px-1.5 py-0.5 bg-theme-700 text-zinc-100"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </Link>
    </li>
  );
}

export default ProjectItem;
