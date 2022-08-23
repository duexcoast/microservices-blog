import React from 'react';

export default function InputField({ label, placeholder, value, setValue }) {
  return (
    <div className="mb-6">
      <label
        htmlFor={label.replace(/\s+/g, '')}
        className="tex-sm mb-2 block font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        id={label.replace(/\s+/g, '')}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
