import React from "react";
import Image from "next/image";
import { Heart, MoreHorizontal, Send } from "lucide-react";
import { LuMessageSquareMore } from "react-icons/lu";
import { IoBookmarksOutline } from "react-icons/io5";
import { Avatar, AvatarGroup } from "@mui/material";
import { useParams } from "next/navigation";
import ImagesCollage from "./images-collage";
import { UserData } from "./types/user-profile";

export default function Post({ data }: { data: UserData }) {
  const { id } = useParams<{ id: string }>();

  const { full_name } = data;

  return (
    <section className='bg-white flex flex-col gap-2 mt-5'>
      <div className=''>
        <div className='flex items-center justify-between'>
          <section className='flex items-center gap-3 py-3'>
            <Avatar
              src='/newuser.png'
              alt='Babatunde'
              sx={{ width: 60, height: 60 }}
            />
            <div>
              <h3 className='font-sora font-semibold text-base text-[#2A2A2A]'>
                {full_name}
                <span className='font-light font-sora text-sm text-[#494850]'>
                  @{id}
                </span>
              </h3>
              <div className='flex items-center gap-2'>
                <p className='font-sora font-normal text-sm text-[#8F8E93]'>
                  10d ago
                </p>
                <div className='h-[6px] w-[6px] rounded-full bg-[#8E9391]'></div>
                <p className='font-normal font-sora text-xs text-[#4534B8]'>
                  Edited
                </p>
              </div>
            </div>
          </section>
          <MoreHorizontal />
        </div>

        <div className='flex flex-col gap-4'>
          <h3 className='font-sora font-normal text-base text-[#2A2A2A]'>
            Looking for an experienced people to help me find people in US to
            test my app
          </h3>

          <ImagesCollage />

          <div className='flex flex-col gap-4'>
            <h3 className='font-sora font-normal text-base text-[#2A2A2A]'>
              Looking for an experienced people to help me find people in US to
              test my app
            </h3>
            <p className='font-sora font-normal text-sm text-[#4534B8] mb-3'>
              #wedding #design
            </p>
          </div>
        </div>

        {/* <Separator className="bg-[#F0F0F1] my-5" /> */}

        <section className='flex items-center justify-between'>
          <div className='flex items-center gap-[48px]'>
            <div className='flex items-center gap-2'>
              <Heart color='#494850' size={18} />
              <p className='font-normal text-sm font-sora text-[#494850]'>
                306 likes
              </p>
            </div>
            <div className='flex items-center gap-2'>
              <LuMessageSquareMore color='#494850' size={18} />
              <p className='font-normal text-sm font-sora text-[#494850]'>
                3.1K comments
              </p>
            </div>
            <div className='flex items-center gap-2'>
              <Send color='#494850' size={18} />
              <p className='font-normal text-sm font-sora text-[#494850]'>
                Share
              </p>
            </div>
          </div>
          <div>
            <IoBookmarksOutline color='#494850' size={18} />
          </div>
        </section>

        <section className='flex items-center gap-2 mt-4'>
          <AvatarGroup spacing='medium'>
            <Avatar
              alt='Babatunde'
              src='/newuser.png'
              sx={{ width: 25, height: 25 }}
            />
            <Avatar
              alt='Babatunde'
              src='/newuser.png'
              sx={{ width: 25, height: 25 }}
            />
            <Avatar
              alt='Babatunde'
              src='/newuser.png'
              sx={{ width: 25, height: 25 }}
            />
          </AvatarGroup>
          <h3 className='font-normal font-sora text-sm text-[#8F8E93]'>
            Liked by Maria Mgosewa and 10 others
          </h3>
        </section>
      </div>
    </section>
  );
}
