import { getMarkdowns } from '@/entities/markdown';
import { BASE_URL } from '@/shared/consts';

import type { MetadataRoute } from 'next';

function sitemap(): MetadataRoute.Sitemap {
  const posts = getMarkdowns('posts');
  const projects = getMarkdowns('projects');

  const postSiteMaps: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/posts/${post.slug}`,
    lastModified: post.metadata.publishedAt,
    changeFrequency: 'yearly',
    priority: 1,
  }));

  const projectSiteMaps: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: project.metadata.publishedAt,
    changeFrequency: 'yearly',
    priority: 1,
  }));

  return [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/posts`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...postSiteMaps,
    ...projectSiteMaps,
  ];
}

export default sitemap;
