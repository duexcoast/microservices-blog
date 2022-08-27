/* eslint-disable arrow-body-style */
import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';

import PostCard from './PostCard';

export default function PostList() {
  const [posts, setPosts] = useState({});

  const fetchPosts = useCallback(async () => {
    const { data } = await axios.get('http://posts.com:4002/posts');

    setPosts(data);
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const renderedPosts = Object.values(posts).map(
    ({ title, slug, id, comments }) => {
      return (
        <PostCard
          key={id}
          title={title}
          slug={slug}
          postId={id}
          comments={comments}
        />
      );
    }
  );

  return <div className="flex flex-wrap gap-4">{renderedPosts}</div>;
}
