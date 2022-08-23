import React from 'react';

export default function FormButton({ type, value }) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
    >
      {value}
    </button>
  );
}
