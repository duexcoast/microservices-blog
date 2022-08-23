import axios from 'axios';
import React, { useState } from 'react';

import FormButton from '../ui/FormButton';
import InputField from '../ui/InputField';

export default function PostCreate() {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');

  const onSubmit = async e => {
    e.preventDefault();

    await axios.post('http://localhost:4000/posts', {
      title,
      slug
    });

    // on succesful submit, set form states to empty string
    setTitle('');
    setSlug('');
  };
  return (
    <div className="relative block w-full max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md  dark:border-gray-700 dark:bg-gray-800">
      <form onSubmit={onSubmit}>
        <InputField
          label="Title:"
          placeholder="Your post title"
          value={title}
          setValue={setTitle}
        />
        <InputField
          label="Slugline:"
          placeholder="Short description for your post"
          value={slug}
          setValue={setSlug}
        />
        <FormButton type="submit" value="Submit" />
      </form>
    </div>
  );
}
