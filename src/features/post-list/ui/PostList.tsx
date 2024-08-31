import { PostItem } from '@/entities/post';
import { getPostFileNames } from '@/features/post-list/lib';

function PostList() {
  const postFileNames = getPostFileNames();

  return (
    <ul className="layout-width space-y-16 xs:space-y-20 md:xs:space-y-24">
      {postFileNames.map((postFileName) => (
        <PostItem key={postFileName} postFileName={postFileName} />
      ))}
    </ul>
  );
}

export default PostList;
