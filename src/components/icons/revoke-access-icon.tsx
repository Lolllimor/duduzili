import React, { ComponentProps } from 'react';

function RevokeAccessIcon(props?: ComponentProps<'svg'>) {
  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
      {...props}
    >
      <rect x="5" y="5" width="60" height="60" rx="30" fill="#FEE4E2" />
      <rect
        x="5"
        y="5"
        width="60"
        height="60"
        rx="30"
        stroke="#FEF3F2"
        strokeWidth="10"
      />
      <path
        d="M35 29.6875V36.25"
        stroke="#D50000"
        strokeWidth="1.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M46.35 30.725V39.275C46.35 40.675 45.6 41.9751 44.3875 42.6876L36.9625 46.975C35.75 47.675 34.25 47.675 33.025 46.975L25.6 42.6876C24.3875 41.9876 23.6375 40.6875 23.6375 39.275V30.725C23.6375 29.325 24.3875 28.025 25.6 27.3125L33.025 23.025C34.2375 22.325 35.7375 22.325 36.9625 23.025L44.3875 27.3125C45.6 28.025 46.35 29.3125 46.35 30.725Z"
        stroke="#D50000"
        strokeWidth="1.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35 40.25V40.375"
        stroke="#D50000"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default RevokeAccessIcon;
