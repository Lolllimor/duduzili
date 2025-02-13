import React, { ComponentProps } from 'react';

function PhoneIcon(props?: ComponentProps<'svg'>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" 
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
      {...props}
    >
      <path
        d="M14 3V5H5V19H19V10H21V19C21 19.55 20.8043 20.021 20.413 20.413C20.021 20.8043 19.55 21 19 21H5C4.45 21 3.979 20.8043 3.587 20.413C3.19567 20.021 3 19.55 3 19V5C3 4.45 3.19567 3.979 3.587 3.587C3.979 3.19567 4.45 3 5 3H14ZM19 3V5H21V7H19V9H17V7H15V5H17V3H19ZM6 17H18L14.25 12L11.25 16L9 13L6 17ZM5 5V19V5Z"
        fill="#4534B8"
      />
    </svg>
  );
}

export default PhoneIcon;
