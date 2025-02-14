import { EllipsisVertical, Search } from "lucide-react";
import ProfileAvatar from "./profile-avatar";
import { MessageTypes } from "./types";
import Message from "./message";
import { useFetchConversationQuery } from "@/redux/features/supportApi";
import useWs from "@/hooks/use-ws";
import { useRef, useState } from "react";
import { cookieStorage } from "@ibnlanre/portal";
import { Skeleton } from "../ui/skeleton";
import toast from "react-hot-toast";
import { decrypt } from "@/lib/decrypt";

export default function Conversations({ user }: { user: MessageTypes }) {
  const { user_details, conversation_id } = user;

  let token = cookieStorage.getItem("duduzili-auth");
  if (token) {
    token = JSON.parse(token)?.access_token;
  }

  const [ready, messages, send] = useWs(
    `wss://duduzili-staging-server.info/ws/admin-chat/${user_details.username}/?token=${token}`
  );

  const { data, isLoading, isError } = useFetchConversationQuery({
    conversation_id,
  });

  const conversations = data?.data.results;

  if (isError) {
    toast("Network Error");
  }

  const decryptedMessages = decrypt(messages);
  const messagesEndRef = useRef(null);

  console.log(decryptedMessages);

  return (
    <div className='px-5 pt-5'>
      {/* User Header */}
      <div className='flex items-center justify-between mb-5'>
        <div className='flex items-center gap-3'>
          <ProfileAvatar src={user_details.profile_photo} />
          <div className='flex flex-col'>
            <div className='font-semibold'>
              {user_details.full_name}{" "}
              <span className='font-light text-sm'>
                @{user_details.username}
              </span>
            </div>
            <div className='text-slate-400 text-sm'>Active now</div>
          </div>
        </div>
        <div className='flex items-center gap-3 text-slate-500'>
          <Search />
          <EllipsisVertical />
        </div>
      </div>

      {/* Conversation Body */}
      <div className='bg-slate-200/30 rounded-md w-full h-[calc(100vh-240px)] text-xs text-slate-500 p-5 overflow-auto hide-scroll'>
        <div className='text-center bg-white px-3 py-2 mx-auto w-fit'>
          Today
        </div>
        <Message photo={user_details.profile_photo}>
          Hi, My name is {user_details.full_name}.
        </Message>
        {isLoading && (
          <div className='flex flex-col items-end gap-3 mt-2'>
            <Skeleton className='h-5 w-1/2' />
            <Skeleton className='h-5 w-1/2' />
          </div>
        )}
        {conversations?.map((conversation: any) => (
          <Message
            key={conversation.message_id}
            photo={user_details.profile_photo}
            alignRight>
            {conversation.text}
          </Message>
        ))}
        {decryptedMessages?.map((message: any) => (
          <Message key={message.message.message_id} alignRight>
            {message.message.text}
          </Message>
        ))}
      </div>
    </div>
  );
}
