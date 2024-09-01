import { PostDetail } from '@/features/post-detail';

interface PostPageProps {
  params: {
    slug: string;
  };
}

function PostPage({ params }: PostPageProps) {
  return (
    <section>
      <article>
        <PostDetail slug={params.slug} />
      </article>
    </section>
  );
}

export default PostPage;
