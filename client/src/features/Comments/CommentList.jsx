/* eslint-disable arrow-body-style */
import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';

export default function CommentList({ postId }) {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );

    setComments(res.data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const renderedComments = comments.map(comment => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul className="list-inside list-disc">{renderedComments}</ul>;
}
