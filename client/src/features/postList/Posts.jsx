/* eslint-disable arrow-body-style */
import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';


import PostCard from './PostCard';

export default function PostList() {
  const [posts, setPosts] = useState({});

  const fetchPosts = useCallback(async () => {
    const { data } = await axios.get('http://localhost:4000/posts');
    setPosts(data);
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const renderedPosts = Object.values(posts).map(post => {
    return <PostCard title={post.title} slug={post.slug} postId={post.id} />;
  });

  return <div className="flex flex-wrap gap-4">{renderedPosts}</div>;
}
