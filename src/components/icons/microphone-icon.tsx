import React, { ComponentProps } from 'react';

function MicrophoneIcon(props?: ComponentProps<'svg'>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
      {...props}
    >
      <path
        d="M12 15.5C14.21 15.5 16 13.71 16 11.5V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V11.5C8 13.71 9.79 15.5 12 15.5Z"
        stroke="#4534B8"
        strokeWidth="1.5"
       strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.3501 9.6499V11.3499C4.3501 15.5699 7.7801 18.9999 12.0001 18.9999C16.2201 18.9999 19.6501 15.5699 19.6501 11.3499V9.6499"
        stroke="#4534B8"
        strokeWidth="1.5"
       strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6099 6.43012C11.5099 6.10012 12.4899 6.10012 13.3899 6.43012"
        stroke="#4534B8"
        strokeWidth="1.5"
       strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.2002 8.54982C11.7302 8.40982 12.2802 8.40982 12.8102 8.54982"
        stroke="#4534B8"
        strokeWidth="1.5"
       strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 19V22"
        stroke="#4534B8"
        strokeWidth="1.5"
       strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default MicrophoneIcon;
