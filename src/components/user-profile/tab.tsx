import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Post from "./post";
import { images } from "./image";
import Image from "next/image";
import Images from "./images";

export default function UserTab() {
  return (
    <div className='p-5 w-full'>
      <Tabs defaultValue='post' className=''>
        <TabsList className='!bg-white !w-full !flex !justify-between !border-none !rounded-none'>
          <TabsTrigger
            value='post'
            className='data-[state=active]:text-[#4534B8] !justify-normal text-[#8F8E93] !shadow-none !rounded-none  data-[state=active]:border-b-[3px] data-[state=active]:border-[#4534B8] font-sora font-semibold text-sm'>
            All posts
          </TabsTrigger>
          <TabsTrigger
            value='photos'
            className='data-[state=active]:text-[#4534B8]  text-[#8F8E93] !shadow-none !rounded-none  data-[state=active]:border-b-[3px] data-[state=active]:border-[#4534B8] font-sora font-semibold text-sm'>
            Photos
          </TabsTrigger>
          <TabsTrigger
            value='videos'
            className='data-[state=active]:text-[#4534B8]  text-[#8F8E93] !shadow-none !rounded-none  data-[state=active]:border-b-[3px] data-[state=active]:border-[#4534B8] font-sora font-semibold text-sm'>
            Videos
          </TabsTrigger>
          <TabsTrigger
            value='audios'
            className='data-[state=active]:text-[#4534B8]  text-[#8F8E93] !shadow-none !rounded-none  data-[state=active]:border-b-[3px] data-[state=active]:border-[#4534B8] font-sora font-semibold text-sm'>
            Audios
          </TabsTrigger>
        </TabsList>
        <TabsContent value='post' className=''>
          {/* <UserDetails /> */}
          <Post />
        </TabsContent>
        <TabsContent value='photos' className='mt-5'>
          {images.map((image, index) => {
            return <Images key={index} index={index} image={image} />;
          })}
        </TabsContent>
        <TabsContent value='videos' className='mt-5'>
          {images.map((image, index) => {
            return <Images key={index} index={index} image={image} />;
          })}
        </TabsContent>
        <TabsContent value='audios' className='mt-5'>
          {images.map((image, index) => {
            return <Images key={index} index={index} image={image} />;
          })}
        </TabsContent>
      </Tabs>
    </div>
  );
}
