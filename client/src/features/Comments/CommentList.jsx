/* eslint-disable arrow-body-style */
import React from 'react';

export default function CommentList({ comments }) {
  const renderedComments = comments.map(comment => {
    if (comment.status === 'rejected') {
      return (
        <li className="italic" key={comment.id}>
          This comment has been rejected.
        </li>
      );
    }
    if (comment.status === 'pending') {
      return (
        <li className="italic" key={comment.id}>
          This comment is pending approval.
        </li>
      );
    }
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul className="list-inside list-disc">{renderedComments}</ul>;
}
