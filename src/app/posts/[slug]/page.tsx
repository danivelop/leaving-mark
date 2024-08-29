interface PostPageProps {
  params: {
    slug: string;
  };
}

function PostPage({ params }: PostPageProps) {
  return <div>Post: {params.slug}</div>;
}

export default PostPage;
