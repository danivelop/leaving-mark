import { getMarkdowns } from '@/entities/markdown';
import { BASE_URL } from '@/shared/consts';

import type { MetadataRoute } from 'next';

function sitemap(): MetadataRoute.Sitemap {
  const posts = getMarkdowns('posts');
  const projects = getMarkdowns('projects');

  const latestPostDate = posts.reduce((latest, post) => {
    const date = new Date(post.metadata.publishedAt);
    return date > latest ? date : latest;
  }, new Date(0));

  const latestProjectDate = projects.reduce((latest, project) => {
    const date = new Date(project.metadata.publishedAt);
    return date > latest ? date : latest;
  }, new Date(0));

  const homeLastModified =
    latestPostDate > latestProjectDate ? latestPostDate : latestProjectDate;

  const postSiteMaps: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/posts/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const projectSiteMaps: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: new Date(project.metadata.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  return [
    {
      url: `${BASE_URL}`,
      lastModified: homeLastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/posts`,
      lastModified: latestPostDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: latestProjectDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...postSiteMaps,
    ...projectSiteMaps,
  ];
}

export default sitemap;
