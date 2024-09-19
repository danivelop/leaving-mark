import { PostList } from '@/features/post-list';
import { TagFilter } from '@/features/tag-filter';
import { getMarkdowns } from '@/shared/lib/markdownUtils';
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
        <TagFilter markdowns={posts} selectedTag={searchParams.tag} />
      </article>
      <Space className="h-12" />
      <article>
        <PostList posts={posts} selectedTag={selectedTag} />
      </article>
    </section>
  );
}

export default PostsPage;
