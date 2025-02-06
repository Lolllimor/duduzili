import { Mic, Plus, Search, SendHorizonal } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function TextMessage() {
  return (
    <form className='flex items-center justify-between gap-3 px-5 text-slate-600 pt-3 pb-2 ext-center'>
      <Plus />
      <Mic />
      <Input
        placeholder='Type message'
        className='border-[#D9D9DB] rounded-lg placeholder:text-[#8F8E93] placeholder:font-sora placeholder:text-xs font-normal'
      />
      <div className='bg-[#4534B8] rounded-full text-white p-2'>
        <SendHorizonal size={16} />
      </div>
    </form>
  );
}
