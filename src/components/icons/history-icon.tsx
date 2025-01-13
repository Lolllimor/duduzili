import React, { ComponentProps } from 'react';

function HistoryIcon(props?: ComponentProps<'svg'>) {
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
        d="M18.8332 10.2728C18.8332 14.8728 15.0998 18.6061 10.4998 18.6061C5.89984 18.6061 2.1665 14.8728 2.1665 10.2728C2.1665 5.67279 5.89984 1.93945 10.4998 1.93945C15.0998 1.93945 18.8332 5.67279 18.8332 10.2728Z"
        stroke="#8F8E93"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5914 12.9229L11.0081 11.3812C10.5581 11.1146 10.1914 10.4729 10.1914 9.94792V6.53125"
        stroke="#8F8E93"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default HistoryIcon;
