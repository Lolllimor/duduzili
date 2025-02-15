import React, { ComponentProps } from 'react';

function ContactLocation(props?: ComponentProps<'svg'>) {
  return (
    <svg
      width="56"
      height="57"
      viewBox="0 0 56 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
      {...props}
    >
      <circle opacity="0.05" cx="28" cy="28.2734" r="28" fill="#4534B8" />
      <path
        d="M38.056 24.137C36.831 18.747 32.1294 16.3203 27.9994 16.3203C27.9994 16.3203 27.9994 16.3203 27.9877 16.3203C23.8694 16.3203 19.156 18.7353 17.931 24.1253C16.566 30.1453 20.2527 35.2436 23.5894 38.452C24.826 39.642 26.4127 40.237 27.9994 40.237C29.586 40.237 31.1727 39.642 32.3977 38.452C35.7344 35.2436 39.421 30.157 38.056 24.137ZM27.9994 29.982C25.9694 29.982 24.3244 28.337 24.3244 26.307C24.3244 24.277 25.9694 22.632 27.9994 22.632C30.0294 22.632 31.6744 24.277 31.6744 26.307C31.6744 28.337 30.0294 29.982 27.9994 29.982Z"
        fill="#4534B8"
      />
    </svg>
  );
}

export default ContactLocation;
