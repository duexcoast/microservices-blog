import React, { useState } from 'react';

import InputField from '../ui/InputField';

export default function CreateComment() {
  const [comment, setComment] = useState('');
  return (
    <div>
      <form>
        <InputField
          label="New Comment"
          placeholder=""
          value={comment}
          setValue={setComment}
        />
      </form>
    </div>
  );
}
