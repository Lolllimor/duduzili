"use client";

import { ArrowLeft, EllipsisVertical } from "lucide-react";
import React, { useEffect, useState } from "react";
// import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import UserTab from "./tab";
import { useParams, useRouter } from "next/navigation";
import GeneralLayout from "../layout/generalLayout";
import { normalizeUrlParams } from "@/lib/normalize-url";
import { useFetchUserProfileQuery } from "@/redux/features/userApi";
import { Avatar, AvatarGroup, Divider } from "@mui/material";
import ProfileAvatar from "./profile-avatar";
import ProfileSidebar from "./profile-sidebar";
import PostContainer from "../post/post-container";
import { Skeleton } from "../ui/skeleton";

export const UserProfile = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const { data: userData, isLoading } = useFetchUserProfileQuery({ id });

  useEffect(() => {
    if (!id) {
      router.replace("/user");
    }
  }, [id, router]);

  if (isLoading) {
    return (
      <div className='p-10 w-full flex flex-col gap-5'>
        <Skeleton className='h-20 w-20 rounded-full' />
        <Skeleton className='w-3/4 h-5' />
        <Skeleton className='w-3/4 h-5' />
        <Skeleton className='w-3/4 h-5' />
        <Skeleton className='w-3/4 h-5' />
      </div>
    );
  }

  const data = userData?.data;

  return (
    <GeneralLayout
      pageTitle={[
        "User",
        `${normalizeUrlParams(id.charAt(0).toUpperCase() + id.slice(1))}`,
      ]}
      className='h-[calc(100vh-102px)]'>
      <section className='flex px-6 gap-3'>
        <div className='w-[70%]'>
          <div className='bg-white border border-[#F0F0F1] rounded-t-[12px]'>
            <div className='flex items-center justify-between p-5 border-b'>
              <div className='flex items-center gap-2 '>
                <div onClick={() => router.back()} className='cursor-pointer'>
                  <ArrowLeft />
                </div>
                <h3 className='font-sora font-bold text-xl text-[#2A2A2A]'>
                  {data?.full_name}
                </h3>
              </div>
              <EllipsisVertical />
            </div>
            <section className='flex items-center gap-5 p-5'>
              <ProfileAvatar photo={data?.profile_photo} />
              <div>
                <h3 className='font-sora font-semibold text-2xl text-[#23222C]'>
                  {data?.full_name}
                </h3>
                <div className='flex items-center gap-2'>
                  <p className='font-sora font-normal text-base text-[#494850]'>
                    @{id}
                  </p>
                  <div className='h-[6px] w-[6px] rounded-full bg-[#8E9391]'></div>
                  <p className='font-normal font-sora text-sm text-[#04802E]'>
                    online
                  </p>
                </div>
              </div>
            </section>
            {/* followes */}
            <section className='flex items-center px-5 gap-[40px]'>
              <div className='flex flex-col gap-2'>
                <p className='font-sora font-normal text-sm text-[#8F8E93]'>
                  Posts
                </p>
                <p className='font-sora font-semibold text-base text-[#2A2A2A]'>
                  {data?.posts}
                </p>
              </div>

              <div className='bg-[#D9D9DB] w-[1px] h-[38px]'></div>

              <div className='flex flex-col gap-2'>
                <p className='font-sora font-normal text-sm text-[#8F8E93]'>
                  Followers
                </p>
                <p className='font-sora font-semibold text-base text-[#2A2A2A]'>
                  {data?.follower}
                </p>
              </div>
              <div className='bg-[#D9D9DB] w-[1px] h-[38px]'></div>

              <div className='flex flex-col gap-2 w-full'>
                <p className='font-sora font-normal text-sm text-[#8F8E93]'>
                  Following
                </p>
                <div className='flex items-center gap-2 w-full'>
                  <p className='font-sora font-semibold text-base text-[#2A2A2A]'>
                    {data?.following}
                  </p>
                  <div className='flex'>
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
                  </div>
                </div>
              </div>
            </section>
            {/* <PostContainer /> */}
            <UserTab data={data} />
          </div>
        </div>

        {/* Sidebar */}
        <ProfileSidebar data={data} />
      </section>
    </GeneralLayout>
  );
};
