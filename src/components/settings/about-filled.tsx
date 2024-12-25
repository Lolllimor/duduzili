import React from 'react';
import { Button } from '../ui/button';
import { IoMdAdd } from 'react-icons/io';

export const AboutFilled = () => {

  return (
    <div className="flex flex-col p-8 gap-10">
      <div className="flex justify-between items-center">
        
        <span className="text-2xl font-bold">About Duduzili</span>

        <Button className="h-10 w-[160px] rounded-[48px] text-sm font-semibold flex items-center gap-2.5 bg-[#4534B8] text-white">
          <IoMdAdd className="size-5" />
          About Duduzili
        </Button>
      </div>
      <p className="text-xl">
        We are about bringing people together. We are building tools for people
        with something to say and ideas to share, people who believe in
        authentic expression and want to control the value for their own
        creations without fear of censorship. Because everyone benefits when we
        have access to more ideas, diverse opinions and dialogue. Join us we are
        on a mission to bring people together
      </p>
    </div>
  );
};
