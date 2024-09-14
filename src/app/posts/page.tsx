import { PostList } from '@/features/post-list';
import { getMarkdowns } from '@/shared/lib/markdownUtils';

function PostsPage() {
  const posts = getMarkdowns('posts');

  return (
    <section>
      <article>
        <PostList posts={posts} />
      </article>
    </section>
  );
}

export default PostsPage;
