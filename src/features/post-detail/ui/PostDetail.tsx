import { Post } from '@/entities/post';

interface PostDetailProps {
  slug: string;
}

function PostDetail({ slug }: PostDetailProps) {
  return (
    <section>
      <Post slug={slug} />
    </section>
  );
}

export default PostDetail;
