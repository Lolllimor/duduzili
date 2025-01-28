import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AllPosts } from "./all-post";

export const UserTab = () => {
  return (
    <div className="p-5 w-full">
      <Tabs defaultValue="post" className="">
        <TabsList className="!bg-white !w-full !flex !justify-between px-5  !border-none !rounded-none">
          <TabsTrigger
            value="post"
            className="data-[state=active]:text-[#4534B8] !justify-normal text-[#8F8E93] !shadow-none !rounded-none  data-[state=active]:border-b-[3px] data-[state=active]:border-[#4534B8] font-sora font-semibold text-sm"
          >
            All posts
          </TabsTrigger>
          <TabsTrigger
            value="photos"
            className="data-[state=active]:text-[#4534B8]  text-[#8F8E93] !shadow-none !rounded-none  data-[state=active]:border-b-[3px] data-[state=active]:border-[#4534B8] font-sora font-semibold text-sm"
          >
            Photos
          </TabsTrigger>
          <TabsTrigger
            value="videos"
            className="data-[state=active]:text-[#4534B8]  text-[#8F8E93] !shadow-none !rounded-none  data-[state=active]:border-b-[3px] data-[state=active]:border-[#4534B8] font-sora font-semibold text-sm"
          >
            Videos
          </TabsTrigger>
          <TabsTrigger
            value="audios"
            className="data-[state=active]:text-[#4534B8]  text-[#8F8E93] !shadow-none !rounded-none  data-[state=active]:border-b-[3px] data-[state=active]:border-[#4534B8] font-sora font-semibold text-sm"
          >
            Audios
          </TabsTrigger>
        </TabsList>
        <TabsContent value="post" className="">
          {/* <UserDetails /> */}
          <AllPosts />
        </TabsContent>
        <TabsContent value="photos">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="videos">Change your password here.</TabsContent>
        <TabsContent value="audios">
          Make changes to your account here.
        </TabsContent>
      </Tabs>
    </div>
  );
};
