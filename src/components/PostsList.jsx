// src/components/PostsList.jsx

import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../api/postsApi';
import Post from './Post';

function PostsList() {
  const { data: posts, error, isLoading } = useQuery(['posts'], fetchPosts);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching posts</div>;

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostsList;

