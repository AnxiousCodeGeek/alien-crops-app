import React from 'react';

export const Input = ({ className, ...props }) => (
  <input
    className={`border rounded px-2 py-1 w-full ${className}`}
    {...props}
  />
);
