"use client";

import GeneralLayout from "@/components/layout/generalLayout";
import Conversations from "@/components/support/conversations";
import MessagePreview from "@/components/support/message-preview";
import TextMessage from "@/components/support/text-message";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import useWs from "@/hooks/use-ws";
import { userEmail } from "@/redux/features/auth/authSlice";
import { useFetchMessageListQuery } from "@/redux/features/supportApi";
import { cookieStorage } from "@ibnlanre/portal";
import { Divider } from "@mui/material";
import { TabsTrigger } from "@radix-ui/react-tabs";
import { RootState } from "@reduxjs/toolkit/query";
import { Plus, Search } from "lucide-react";
import { useEffect } from "react";

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
    {
      senderID: "abrahama",
      full_name: "Abraham Oyebode",
      message: "I'm good, thank you",
      time: "1m",
    },
  ];

  let token = cookieStorage.getItem("duduzili-auth");
  if (token) {
    token = JSON.parse(token)?.access_token;
  }

  const [ready, messages, sendMessage] = useWs(
    `wss://duduzili-staging-server.info/ws/admin-conversation/?token=${token}`
  );

  useEffect(() => {
    const handleSendMessage = () => {
      const messageData = {
        command: "join",
      };
      console.log("ready");
      sendMessage(JSON.stringify(messageData));
    };

    handleSendMessage();
  }, []);

  console.log(ready, messages);

  return (
    <GeneralLayout
      pageTitle='Customer Support'
      className='h-[calc(100vh-70px)]'>
      <div className='px-6 pt-6 bg-[#F5F5F6]'>
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
              <TabsList className='block h-[calc(100vh-155px)] overflow-auto bg-white p-0 rounded-none hide-scroll'>
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
                    <TextMessage send={sendMessage} />
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
