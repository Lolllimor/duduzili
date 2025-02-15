import React, { ComponentProps } from 'react';

function TrashIcon(props?: ComponentProps<'svg'>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
      {...props}
    >
      <path
        d="M14 3.98665C11.78 3.76665 9.54667 3.65332 7.32 3.65332C6 3.65332 4.68 3.71999 3.36 3.85332L2 3.98665"
        stroke="#ED5556"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.6665 3.31325L5.81317 2.43992C5.91984 1.80659 5.99984 1.33325 7.1265 1.33325H8.87317C9.99984 1.33325 10.0865 1.83325 10.1865 2.44659L10.3332 3.31325"
        stroke="#ED5556"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5664 6.09326L12.1331 12.8066C12.0598 13.8533 11.9998 14.6666 10.1398 14.6666H5.85977C3.99977 14.6666 3.93977 13.8533 3.86644 12.8066L3.43311 6.09326"
        stroke="#ED5556"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.88672 11H9.10672"
        stroke="#ED5556"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.3335 8.33325H9.66683"
        stroke="#ED5556"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default TrashIcon;
