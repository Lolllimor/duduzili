import { CheckCheck, Dot } from "lucide-react";
import Image from "next/image";
import { MessageTypes } from "./types";

export default function MessagePreview({ message }: { message: MessageTypes }) {
  return (
    <div className='flex flex-col gap-3 px-5 py-3'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <Image
            height='1000'
            width='1000'
            alt='profile_pic'
            src='/deebaba.jpg'
            className='rounded-full w-10 h-10'
          />
          <div className='flex flex-col items-start'>
            <div className='font-bold text-slate-800'>{message.full_name}</div>
            <div className='text-xs'>@{message.senderID}</div>
          </div>
        </div>
        <div className='flex items-center text-slate-500'>
          <Dot />
          <p>{message.time}</p>
        </div>
      </div>
      <div className='flex justify-between items-end'>
        <div className='text-slate-500 text-xs'>{message.message}</div>
        <CheckCheck className='max-w' size={15} />
      </div>
    </div>
  );
}
