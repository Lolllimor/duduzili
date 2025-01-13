import React, { ComponentProps } from 'react';

function EyeIcon(props?: ComponentProps<'svg'>) {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
      {...props}
    >
      <path
        d="M13.4833 10.2724C13.4833 11.9224 12.1499 13.2557 10.4999 13.2557C8.84993 13.2557 7.5166 11.9224 7.5166 10.2724C7.5166 8.6224 8.84993 7.28906 10.4999 7.28906C12.1499 7.28906 13.4833 8.6224 13.4833 10.2724Z"
        stroke="#8F8E93"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.4999 17.1667C13.4415 17.1667 16.1832 15.4333 18.0915 12.4333C18.8415 11.2583 18.8415 9.28333 18.0915 8.10833C16.1832 5.10833 13.4415 3.375 10.4999 3.375C7.5582 3.375 4.81654 5.10833 2.9082 8.10833C2.1582 9.28333 2.1582 11.2583 2.9082 12.4333C4.81654 15.4333 7.5582 17.1667 10.4999 17.1667Z"
        stroke="#8F8E93"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default EyeIcon;
