import { PostList } from '@/features/post-list';

function HomePage() {
  return (
    <main className="lg:mx-auto lg:w-[1024px] px-4 sm:px-6 lg:px-8">
      <PostList />
    </main>
  );
}

export default HomePage;
