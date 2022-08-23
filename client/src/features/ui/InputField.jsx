import React from 'react';

export default function InputField({ label, placeholder, value, setValue }) {
  return (
    <div className='mb-6'>
      <label
        htmlFor={label.replace(/\s+/g, '')}
        className='block mb-2 tex-sm font-medium text-gray-900 dark:text-gray-300'
      >
        {label}
      </label>
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id={label.replace(/\s+/g, '')}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        placeholder={placeholder}
        required
      />
    </div>
  );
}
