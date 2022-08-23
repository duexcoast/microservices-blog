import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PostList() {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const { data } = await axios.get('http://localhost:4000/posts');
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  console.log(posts);
  return <div>PostList</div>;
}
