"use client";

import GeneralLayout from "@/components/layout/generalLayout";
import Conversations from "@/components/support/conversations";
import MessagePreview from "@/components/support/message-preview";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { Divider } from "@mui/material";
import { TabsTrigger } from "@radix-ui/react-tabs";
import { Plus, Search } from "lucide-react";
import { useState } from "react";

export default function Support() {
  const chats = [
    {
      senderID: "deebaba",
      full_name: "Oladayo Ajibola",
      message: "Hello, how are you?",
      time: "5m",
    },
    {
      senderID: "lekan",
      full_name: "Lekan Oyediran",
      message: "I'm fine, thank you",
      time: "2m",
    },
    {
      senderID: "rodiat",
      full_name: "Rodiyaat Oyebode",
      message: "I'm good, thank you",
      time: "1m",
    },
    {
      senderID: "abraham",
      full_name: "Abraham Oyebode",
      message: "I'm good, thank you",
      time: "1m",
    },
  ];

  return (
    <GeneralLayout
      pageTitle='Customer Support'
      className='h-[calc(100vh-70px)]'>
      <div className='p-6 bg-[#F5F5F6] overflow-hidden'>
        <Tabs defaultValue='deebaba'>
          <div className='flex bg-white font-sora'>
            {/* Messages */}
            <div className='w-1/3'>
              <div className='flex items-center justify-between p-5 py-4'>
                <div className='text-xl font-bold text-slate-700'>Messages</div>
                <div className='flex gap-4'>
                  <Search className='w-6 h-6' color='#8f8e93' />
                  <Plus
                    className='w-6 h-6 bg-blue-700 rounded-full'
                    color='#fff'
                  />
                </div>
              </div>
              <Divider />

              {/* Messages Preview */}
              <TabsList className='block h-fit bg-white p-0 rounded-none'>
                <div className='flex flex-col'>
                  {chats.map((chat) => {
                    return (
                      <TabsTrigger
                        key={chat.senderID}
                        value={chat.senderID}
                        className='data-[state=active]:bg-[#4534B8]/10 data-[state=active]:border-r-2 data-[state=active]:border-[#4534B8]'>
                        <MessagePreview message={chat} />
                      </TabsTrigger>
                    );
                  })}
                </div>
              </TabsList>
            </div>

            <Divider orientation='vertical' flexItem />

            {/* Conversation */}
            <div className='w-2/3'>
              {chats.map((chat) => {
                return (
                  <TabsContent value={chat.senderID} key={chat.senderID}>
                    <Conversations user={chat} />
                  </TabsContent>
                );
              })}
            </div>
          </div>
        </Tabs>
      </div>
    </GeneralLayout>
  );
}
