import { PostDetail } from '@/features/post-detail';

interface PostPageProps {
  params: {
    slug: string;
  };
}

function PostPage({ params }: PostPageProps) {
  return <PostDetail slug={params.slug} />;
}

export default PostPage;
