import type { Markdown } from '@/shared/lib/markdownUtils';

export function getRelatedPosts(sourcePost: Markdown, targetPosts: Markdown[]) {
  const sourceTags = new Set(sourcePost.metadata.tags ?? []);

  return targetPosts
    .reduce<{ post: Markdown; score: number }[]>((acc, cur) => {
      if (cur.slug === sourcePost.slug) {
        return acc;
      }

      const targetTags = new Set(cur.metadata.tags ?? []);

      const sharedTags = Array.from(sourceTags).filter((tag) =>
        targetTags.has(tag),
      );
      const score = sharedTags.length;

      if (score > 0) {
        acc.push({ post: cur, score });
      }
      return acc;
    }, [])
    .sort((left, right) => right.score - left.score)
    .slice(0, 3)
    .map((item) => item.post);
}
