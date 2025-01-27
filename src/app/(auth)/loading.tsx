import React from 'react';
import { FaSpinner } from 'react-icons/fa6';

const Loading = () => {
  return (
    <div className="bg-white/10 flex items-center justify-center h-full w-full ">
      <FaSpinner className="animate-spin text-[#4534B8] w-16 h-16" />
    </div>
  );
};

export default Loading;
