'use client';

import Image from 'next/image';
import { IoClose } from 'react-icons/io5';
import { Drawer } from 'vaul';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import PeopleIcon from '../icons/people-icon';

export const ProfileDrawer = ({ id }: { id: string }) => {
  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger className="cursor-pointer">
        <Image
          alt="info circle"
          width={16}
          height={16}
          src="/community/info-circle.svg"
        />
      </Drawer.Trigger>

      <Drawer.Overlay className="fixed inset-0 bg-black/40 z-[999]" />

      <Drawer.Content
        className="fixed top-0 right-0 h-full w-[40%] z-[999] outline-none max-w-[579px]"
        asChild
      >
        <div className="flex flex-col h-full bg-white pt-5 pr-5 rounded-l-[16px]">
          <Drawer.Close>
            <div className="w-full flex justify-end">
              <IoClose className="text-[41px] cursor-pointer" />
            </div>
          </Drawer.Close>
          <Drawer.Title />
          <div className="flex flex-col gap-8">
            <div className="pl-10 flex flex-col gap-6">
              <div className="flex items-center gap-5 mt-[-20px]">
                <Avatar className="w-[100px] h-[100px] rounded-full">
                  <AvatarImage src="" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <span className="text-[#2A2A2A] text-2xl font-sora font-semibold">
                  Justice League
                </span>
              </div>
              <div className="flex gap-10">
                <div className="flex items-center">
                  <div className="flex flex-col pr-10 gap-2">
                    <span className="text-[#8F8E93] text-sm font-sora">
                      Posts
                    </span>
                    <span className="text-[#2A2A2A] text-base font-semibold font-sora">
                      1k
                    </span>
                  </div>
                  <div className="bg-[#D9D9DB] h-[38px] w-[1px]"></div>
                </div>
                <div className="flex items-center">
                  <div className="flex flex-col pr-10 gap-2">
                    <span className="text-[#8F8E93] text-sm font-sora">
                      Administrators
                    </span>
                    <div className="flex gap-2 items-center">
                      <span className="text-[#2A2A2A] text-base font-semibold font-sora">
                        3
                      </span>
                      <div className="flex items-center relative">
                        <div className="flex h-5 w-5 rounded-full border-2 border-black z-10  ml-[-5px] bg-white  "></div>
                        <div className="flex h-5 w-5 rounded-full border-2 border-black z-20  ml-[-5px] bg-white"></div>
                        <div className="flex h-5 w-5 rounded-full border-2 border-black z-30  ml-[-5px] bg-white"></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#D9D9DB] h-[38px] w-[1px]"></div>
                </div>
                <div className="flex items-center">
                  <div className="flex flex-col pr-10 gap-2">
                    <span className="text-[#8F8E93] text-sm font-sora">
                      Members
                    </span>
                    <div className="flex gap-2 items-center">
                      <span className="text-[#2A2A2A] text-base font-semibold font-sora">
                        6k
                      </span>
                      <div className="flex items-center relative">
                        <div className="flex h-5 w-5 rounded-full border-2 border-black z-10  ml-[-5px] bg-white  "></div>
                        <div className="flex h-5 w-5 rounded-full border-2 border-black z-20  ml-[-5px]  bg-white"></div>
                        <div className="flex h-5 w-5 rounded-full border-2 border-black z-30  ml-[-5px] bg-white"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex px-10 flex-col">
              <div className="flex flex-col py-5 gap-2">
                <span className="text-[#2A2A2A] font-semibold text-sm font-sora">
                  Description
                </span>
                <span className="text-[#8F8E93] text-xs font-sora">
                  Looking for an experienced people to help me find people in US
                  to test my app. Looking for an experienced people to help me
                  find people in US to test my app
                </span>
              </div>
              <div className="flex flex-col py-5 gap-2">
                <span className="text-[#2A2A2A] font-semibold text-sm font-sora">
                  About Community
                </span>
                <div className="flex flex-col ">
                  <div className=" flex gap-2 items-start py-3">
                    <PeopleIcon />
                    <div className="flex flex-col">
                      <span className="font-sora tex-xs text-[#2A2A2A] font-semibold">
                        Members
                      </span>
                      <span className="font-sora tex-xs text-[#8F8E93] w-[307px]">
                        There are 449 members and 3 admins in this community
                      </span>
                    </div>
                  </div>
                  <div className=" flex gap-2 items-start py-3">
                    <PeopleIcon />
                    <div className="flex flex-col">
                      <span className="font-sora tex-xs text-[#2A2A2A] font-semibold">
                        Private
                      </span>
                      <span className="font-sora tex-xs text-[#8F8E93] w-[307px]">
                        Only members can see who’s in the community and what
                        they post.
                      </span>
                    </div>
                  </div>
                  <div className=" flex gap-2 items-start py-3">
                    <PeopleIcon />
                    <div className="flex flex-col">
                      <span className="font-sora tex-xs text-[#2A2A2A] font-semibold">
                        History
                      </span>
                      <span className="font-sora tex-xs text-[#8F8E93] w-[307px]">
                        Group created on 27 December, 2022
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Drawer.Content>
    </Drawer.Root>
  );
};
