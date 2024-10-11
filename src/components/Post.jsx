// src/components/Post.jsx

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deletePost } from '../api/postsApi';
import EditPost from './EditPost';
import PropTypes from 'prop-types';

function Post({ post }) {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation(() => deletePost(post.id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
      alert('Post deleted successfully');
    },
  });

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={() => deleteMutation.mutate()}>Delete Post</button>
      <EditPost post={post} />
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;

