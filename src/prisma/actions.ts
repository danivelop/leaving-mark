'use server';

import { prisma } from '@/prisma';

export async function getLikeCount(namespace: string, slug: string) {
  const result = await prisma.like.findUnique({
    where: {
      namespace_slug: {
        namespace,
        slug,
      },
    },
    select: { count: true },
  });

  return result?.count ?? 0;
}

export async function increaseLikeCount(namespace: string, slug: string) {
  const { count } = await prisma.like.upsert({
    where: {
      namespace_slug: {
        namespace,
        slug,
      },
    },
    create: { namespace, slug, count: 1 },
    update: { count: { increment: 1 } },
  });

  return count;
}

export async function decreaseLikeCount(namespace: string, slug: string) {
  const { count } = await prisma.like.upsert({
    where: {
      namespace_slug: {
        namespace,
        slug,
      },
    },
    create: { namespace, slug, count: 0 },
    update: { count: { decrement: 1 } },
  });

  return count;
}
