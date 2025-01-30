import React from "react";
import Image from "next/image";
import { Heart, MoreHorizontal, Send } from "lucide-react";
import { LuMessageSquareMore } from "react-icons/lu";
import { IoBookmarksOutline } from "react-icons/io5";

export default function Post() {
  return (
    <section className='bg-white flex flex-col gap-2 mt-5'>
      <div className=''>
        <div className='flex items-center justify-between'>
          <section className='flex items-center gap-5 py-3'>
            <div className='relative w-fit'>
              <Image src='/newuser.png' width={48} height={48} alt='profile' />
            </div>
            <div>
              <h3 className='font-sora font-semibold text-base text-[#2A2A2A]'>
                Babatunde Adekunle{" "}
                <span className='font-light font-sora text-sm text-[#494850]'>
                  @adetunes
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
          <Image
            src='/ai.svg'
            width={48}
            height={48}
            alt='profile'
            className='w-full'
          />

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
          <div className='flex'>
            <Image src='/newuser.png' width={30} height={30} alt='profile' />
            <Image
              src='/newuser.png'
              width={30}
              height={30}
              alt='profile'
              className='-ml-2'
            />
          </div>
          <h3 className='font-normal font-sora text-sm text-[#8F8E93]'>
            Liked by Maria Mgosewa and 10 others
          </h3>
        </section>
      </div>
    </section>
  );
}
