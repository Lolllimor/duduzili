'use client';
import React, { useRef, useState } from 'react';
import { Button } from '../ui/button';
import { IoMdAdd } from 'react-icons/io';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import Image from 'next/image';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import PhoneIcon from '../icons/photo-icon';
import CameraIcon from '../icons/camera-icon';
import MusicSquare from '../icons/music-square';
import MicrophoneIcon from '../icons/microphone-icon';
import HashtagIcon from '../icons/hashtag-blue-icon';
import EditIcon from '../icons/edit-blue-icon';

export const CreatePost = () => {
  const [value, setValue] = useState('Public');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click(); // Trigger the file input click
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-9 gap-2 flex items-center text-base rounded-[32px] bg-[#4534B8] font-inter">
          <IoMdAdd className="size-5" />
          Create Post
        </Button>
      </DialogTrigger>
      <DialogContent className="px-6 py-8 gap-0 w-[clamp(200px,50vw,645px)] shrink [&>button]:hidden !rounded-[20px] max-h-[clamp(345px,75vh,823px)] overflow-auto">
        <DialogTitle className="h-fit bg-[#FCFCFD]">
          <div className="flex justify-between w-full pb-5 border-b border-[#F3F3F3]">
            <span className="text-2xl font-bold"> Create Post</span>
            <DialogClose aria-label="Close">
              <Image
                src="/close.svg"
                height={36}
                width={36}
                alt="close-btn"
                className="cursor-pointer"
              />
            </DialogClose>
          </div>
        </DialogTitle>
        <div className=" flex flex-col py-8  gap-5">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 ">
              <div className="w-11 h-11 rounded-full border border-[#F0F0F1]"></div>
              <div className="flex flex-col justify-between">
                <span className="text-[#2A2A2A] text-base font-semibold">
                  Duduzili
                </span>
                <span className="text-[#494850] text-sm ">@duduzili</span>
              </div>
            </div>
            <Select defaultValue={value} onValueChange={(val) => setValue(val)}>
              <SelectTrigger className="w-[130px] bg-[#F5F5F5] h-[39px] border-[0.5px] border-[#D9D9DB] shadow-none">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="public" className="cursor-pointer">
                    Public
                  </SelectItem>
                  <SelectItem value="friends">Friends</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="border border-[#D9D9DB] rounded-[16px] h-fit  py-2 pt-[23px]">
            <div className="h-[122px] px-4">
              <span className="text-[#8F8E93] text-base">
                What’s on your mind ?
              </span>
            </div>
            <div className="border-t border-[#F0F0F1] pt-4 flex items-baseline">
              <div className="px-4 flex justify-between items-center w-full h-full">
                <div className="gap-4 flex items-center">
                  <div id="fileUploader">
                    <PhoneIcon
                      onClick={handleClick}
                      className="cursor-pointer"
                    />
                    <input
                      type="file"
                      ref={fileInputRef}
                      accept="image/*"
                      className="hidden"
                    />
                  </div>
                  <CameraIcon />
                  <MusicSquare />
                  <MicrophoneIcon />
                  <HashtagIcon />
                  <EditIcon />
                </div>
                <Button className="bg-[#4534B8] shadow-[0px_4px_14px_0px_#5440D87A] h-12 w-[148px] font-sora rounded-lg text-base">
                  Publish Post
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
