import { BASE_URL } from '@/shared/consts';

import type { MetadataRoute } from 'next';

function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}

export default robots;
