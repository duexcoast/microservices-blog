import React from 'react';

import CommentCreate from '../Comments/CommentCreate';
import CommentList from '../Comments/CommentList';

export default function PostCard({ title, slug, postId, comments }) {
  return (
    <div className="relative block w-full max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{slug}</p>
      <CommentList comments={comments} />
      <CommentCreate postId={postId} />
    </div>
  );
}
