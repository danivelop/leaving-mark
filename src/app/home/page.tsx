import { PostItem, getPosts } from '@/entities/post';

function HomePage() {
  const posts = getPosts();

  return (
    <main>
      <ul>
        {posts.map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </ul>
    </main>
  );
}

export default HomePage;
