/* eslint-disable arrow-body-style */
import React from 'react';

export default function CommentList({ comments }) {
  const renderedComments = comments.map(comment => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul className="list-inside list-disc">{renderedComments}</ul>;
}
