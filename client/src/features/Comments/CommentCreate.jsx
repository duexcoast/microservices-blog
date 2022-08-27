import axios from 'axios';
import React, { useState } from 'react';

import FormButton from '../ui/FormButton';
import InputField from '../ui/InputField';

export default function CommentCreate({ postId }) {
  const [content, setContent] = useState('');

  const onSubmit = async e => {
    e.preventDefault();
    axios.post(`http://posts.com:4001/posts/${postId}/comments`, {
      content
    });
    setContent('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <InputField
          label="New Comment"
          placeholder=""
          value={content}
          setValue={setContent}
        />
        <FormButton type="submit" value="Submit" />
      </form>
    </div>
  );
}
