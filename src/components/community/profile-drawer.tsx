'use client';

import Image from 'next/image';
import { IoClose } from 'react-icons/io5';
import { Drawer } from 'vaul';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import PeopleIcon from '../icons/people-icon';
import { useFetchAboutQuery } from '@/redux/features/settingsApi';
import { useFetchCommunityProfileQuery } from '@/redux/features/communityApi';
import dayjs from 'dayjs';

export const ProfileDrawer = ({ id }: { id: string }) => {
  const { data } = useFetchCommunityProfileQuery(id);

  // {
  //     "success": "",
  //     "status_code": "",
  //     "data": {
  //         "name": "Frontend Devs",
  //         "description": "A short description about Frontend Developers all over the world",
  //         "members_count": 6,
  //         "posts_count": 9,
  //         "members_photo_preview": [
  //             null,
  //             null,
  //             "https://res.cloudinary.com/duduomo/image/upload/v1729526974/samnj3imoomkonbvc8si.png",
  //             null,
  //             "https://res.cloudinary.com/duduomo/image/upload/v1736173924/tyaexmryxlam3du8ttwg.jpg"
  //         ],
  //         "admin_photo_preview": [
  //             "https://res.cloudinary.com/duduomo/image/upload/v1729526974/samnj3imoomkonbvc8si.png"
  //         ],
  //         "admin_count": 1,
  //         "privacy": "Public",
  //         "created": "2024-10-28T11:05:09.022905+01:00",
  //         "group_rules": "Just do good",
  //         "posts_today": 0,
  //         "posts_last_month": 1
  //     },
  //     "message": ""
  // }

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
        className="fixed top-0 right-0 h-full w-[40%] z-[999] outline-none max-w-[540px]"
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
                  {data?.data.name}
                </span>
              </div>
              <div className="flex gap-10">
                <div className="flex items-center">
                  <div className="flex flex-col pr-10 gap-2">
                    <span className="text-[#8F8E93] text-sm font-sora">
                      Posts
                    </span>
                    <span className="text-[#2A2A2A] text-base font-semibold font-sora">
                      {data?.data.posts_count}
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
                        {data?.data.admin_count}
                      </span>
                      <div className="flex items-center relative">
                        {data?.data.admin_photo_preview.map(
                          (item: string) =>
                            item !== null && (
                              <Image
                                key={item}
                                alt="admin-image"
                                src={item}
                                width={20}
                                height={20}
                                className="border-2 border-white max-w-5 max-h-5  ml-[-5px] rounded-full"
                              />
                            )
                        )}
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
                        {data?.data.members_count}
                      </span>
                      <div className="flex items-center relative">
                        {data?.data.members_photo_preview.map(
                          (item: string) =>
                            item !== null && (
                              <Image
                                key={item}
                                alt="admin-image"
                                src={item}
                                width={20}
                                height={20}
                                className="border-2 border-white max-w-5 max-h-5  ml-[-5px] rounded-full"
                              />
                            )
                        )}
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
                  {data?.data.description}
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
                      <span className="font-sora text-xs text-[#2A2A2A] font-semibold">
                        Members
                      </span>
                      <span className="font-sora text-xs text-[#8F8E93] max-w-[307px]">
                        There are {data?.data.members_count} members and{' '}
                        {data?.data.admin_count} admins in this community
                      </span>
                    </div>
                  </div>
                  <div className=" flex gap-2 items-start py-3">
                    <PeopleIcon />
                    <div className="flex flex-col">
                      <span className="font-sora text-xs text-[#2A2A2A] font-semibold">
                        {data?.data.privacy}
                      </span>
                      <span className="font-sora text-xs text-[#8F8E93] max-w-[307px]">
                        Only members can see who’s in the community and what
                        they post.
                      </span>
                    </div>
                  </div>
                  <div className=" flex gap-2 items-start py-3">
                    <PeopleIcon />
                    <div className="flex flex-col">
                      <span className="font-sora text-xs text-[#2A2A2A] font-semibold">
                        History
                      </span>
                      <span className="font-sora text-xs text-[#8F8E93] w-[307px]">
                        Group created on{' '}
                        {dayjs(data?.data.created).format('DD MMMM, YYYY')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-5 gap-2 flex flex-col">
                <span className="text-[#2A2A2A] font-semibold text-sm font-sora">
                  Community Rules
                </span>
                <div className="">
                  <span>{data?.data.group_rules}</span>
                </div>
              </div>
              <div className="py-5 gap-2 flex flex-col">
                <span className="text-[#2A2A2A] font-semibold text-sm font-sora">
                  Community Activity
                </span>
                <div className=" flex gap-2 items-start py-3">
                  <PeopleIcon />
                  <div className="flex flex-col">
                    <span className="font-sora text-xs text-[#2A2A2A] font-semibold">
                      {data?.data.posts_today} new posts today
                    </span>
                    <span className="font-sora text-xs text-[#8F8E93] max-w-[307px]">
                      {data?.data.posts_last_month} posts in the last month
                    </span>
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
