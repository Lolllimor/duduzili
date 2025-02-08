import { Loader } from 'lucide-react';
import React from 'react';
import { FaSpinner } from 'react-icons/fa6';

const Loading = () => {
  return (
    <div className="bg-white/10 flex items-center justify-center h-full w-full ">
      <FaSpinner className="animate-spin w-16 h-16 text-[#4534B8]" />
    </div>
  );
};

export default Loading;
