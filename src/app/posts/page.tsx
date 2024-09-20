import { getMarkdowns } from '@/entities/markdown';
import { PostList } from '@/features/post-list';
import { TagFilter } from '@/features/tag-filter';
import { Space } from '@/shared/ui';

interface PostsPageProps {
  searchParams: {
    tag?: string;
  };
}

function PostsPage({ searchParams }: PostsPageProps) {
  const posts = getMarkdowns('posts');
  const selectedTag = searchParams.tag;

  return (
    <section>
      <article>
        <TagFilter markdowns={posts} selectedTag={selectedTag} />
      </article>
      <Space className="h-12" />
      <article>
        <PostList posts={posts} selectedTag={selectedTag} />
      </article>
    </section>
  );
}

export default PostsPage;
