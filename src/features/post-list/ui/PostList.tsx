import { PostItem, getPosts } from '@/entities/post';

function PostList() {
  const posts = getPosts();

  return (
    <ul className="space-y-5">
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostList;
