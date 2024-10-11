// src/components/EditPost.jsx

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updatePost } from '../api/postsApi';
import PropTypes from 'prop-types';

function EditPost({ post }) {
  const queryClient = useQueryClient();
  const updateMutation = useMutation(updatePost, {
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedPost = {
      id: post.id,
      title: formData.get('title'),
      body: formData.get('body'),
    };
    updateMutation.mutate(updatedPost);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" defaultValue={post.title} required />
      <textarea name="body" defaultValue={post.body} required />
      <button type="submit">Update Post</button>
    </form>
  );
}

EditPost.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default EditPost;
