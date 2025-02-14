import { CheckCheck, Dot } from "lucide-react";
import Image from "next/image";
import { MessageTypes } from "./types";
import ProfileAvatar from "./profile-avatar";

export default function MessagePreview({ message }: { message: MessageTypes }) {
  const { user_details, last_message_details } = message;
  return (
    <div className='flex flex-col gap-3 px-5 py-3'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <ProfileAvatar src={user_details.profile_photo} />
          <div className='flex flex-col items-start'>
            <div className='font-bold text-slate-800 max-w-1/2 truncate'>
              {user_details.full_name}
            </div>
            <div className='text-xs'>@{user_details.username}</div>
          </div>
        </div>
        <div className='flex items-center text-slate-500 text-sm'>
          <Dot />
          <p>3 mins</p>
        </div>
      </div>
      <div className='flex justify-between items-end'>
        <div className='text-slate-500 text-xs'>
          {last_message_details.message}
        </div>
        <CheckCheck className='max-w' size={15} />
      </div>
    </div>
  );
}
