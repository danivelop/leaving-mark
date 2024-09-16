import { PostList } from '@/features/post-list';
import { TagFilter } from '@/features/tag-filter';
import { getMarkdowns } from '@/shared/lib/markdownUtils';

interface PostsPageProps {
  searchParams: {
    tag?: string;
  };
}

function PostsPage({ searchParams }: PostsPageProps) {
  const posts = getMarkdowns('posts');
  const tags = Array.from(
    posts.reduce((acc, cur) => {
      cur.metadata.tags?.forEach((tag) => acc.add(tag));
      return acc;
    }, new Set<string>()),
  );
  const selectedTag = searchParams.tag;
  const matchedPostCount = selectedTag
    ? posts.filter((post) => post.metadata.tags?.includes(selectedTag)).length
    : posts.length;

  return (
    <section>
      <article>
        <TagFilter
          tags={tags}
          selectedTag={selectedTag}
          matchedPostCount={matchedPostCount}
        />
      </article>
      <article>
        <PostList posts={posts} selectedTag={selectedTag} />
      </article>
    </section>
  );
}

export default PostsPage;
