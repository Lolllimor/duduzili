import { Mic, Plus, Search, SendHorizonal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

export default function TextMessage({ send }: { send: any }) {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    send(message);
    setMessage("");
  };

  return (
    <div className='flex items-center justify-between gap-3 px-5 text-slate-600 pt-3 pb-2 ext-center'>
      <Plus />
      <Mic />
      <Input
        placeholder='Type message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className='border-[#D9D9DB] rounded-lg placeholder:text-[#8F8E93] placeholder:font-sora placeholder:text-xs font-normal'
      />
      <button
        onClick={() => sendMessage()}
        className='bg-[#4534B8] rounded-full text-white p-2'>
        <SendHorizonal size={16} />
      </button>
    </div>
  );
}
