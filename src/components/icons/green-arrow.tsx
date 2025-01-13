import React, { ComponentProps } from 'react';

function GreenArrow(props?: ComponentProps<'svg'>) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
      {...props}
    >
      <path
        d="M1.6665 6L6.1665 1L10.6665 6M6.1665 11V1.71429"
        stroke="#0DBF66"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default GreenArrow;
