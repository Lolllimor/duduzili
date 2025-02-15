import React, { ComponentProps } from 'react';

function MusicSquare(props?: ComponentProps<'svg'>) {
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
        d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z"
        stroke="#4534B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.4201 17.1097C9.28719 17.1097 9.99011 16.4068 9.99011 15.5397C9.99011 14.6726 9.28719 13.9697 8.4201 13.9697C7.55302 13.9697 6.8501 14.6726 6.8501 15.5397C6.8501 16.4068 7.55302 17.1097 8.4201 17.1097Z"
        stroke="#4534B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.75 14.4897V8.34973C15.75 7.03973 14.93 6.85978 14.1 7.08978L10.96 7.94976C10.39 8.10976 10 8.55977 10 9.20977V10.3097V11.0497V15.5497"
        stroke="#4534B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.1804 16.0599C15.0474 16.0599 15.7504 15.357 15.7504 14.4899C15.7504 13.6228 15.0474 12.9199 14.1804 12.9199C13.3133 12.9199 12.6104 13.6228 12.6104 14.4899C12.6104 15.357 13.3133 16.0599 14.1804 16.0599Z"
        stroke="#4534B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99023 11.0397L15.7502 9.46973"
        stroke="#4534B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default MusicSquare;
