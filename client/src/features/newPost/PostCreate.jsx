import React, { useState } from 'react';
import axois from 'axios';
import InputField from '../ui/InputField';
import FormButton from '../ui/FormButton';
import axios from 'axios';

export default function PostCreate() {
  const [title, setTitle] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    
    await axios.post('http://localhost:4000/posts', {
      title,
    });

    // on succesful submit, set title to empty string
    setTitle('');
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <InputField
          label='Title'
          placeholder='Your post title'
          value={title}
          setValue={setTitle}
        />
        <FormButton type='submit' value='Submit' />
      </form>
    </div>
  );
}
