import { EllipsisVertical, Search } from "lucide-react";
import ProfileAvatar from "./profile-avatar";
import { MessageTypes } from "./types";
import Message from "./message";

export default function Conversations({ user }: { user: MessageTypes }) {
  return (
    <div className='px-5 pt-5'>
      {/* User Header */}
      <div className='flex items-center justify-between mb-5'>
        <div className='flex items-center gap-3'>
          <ProfileAvatar />
          <div className='flex flex-col'>
            <div className='font-semibold'>
              {user.full_name}{" "}
              <span className='font-light text-sm'> @{user.senderID} </span>
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
      <div className='bg-slate-200/30 rounded-md w-full h-[calc(100vh-225px)] text-xs text-slate-500 p-5 overflow-auto hide-scroll'>
        <div className='text-center bg-white px-3 py-2 mx-auto w-fit'>
          Today
        </div>
        <Message>
          {user.message} Lorem ipsum dolor sit amet consectetur.
        </Message>
        <Message alignRight>
          {user.message} Lorem ipsum dolor sit amet consectetur.
        </Message>
        <Message alignRight>
          {user.message} Lorem ipsum dolor sit amet consectetur.
        </Message>
        <Message alignRight>
          {user.message} Lorem ipsum dolor sit amet consectetur.
        </Message>
        <Message alignRight>
          {user.message} Lorem ipsum dolor sit amet consectetur.
        </Message>
      </div>
    </div>
  );
}
