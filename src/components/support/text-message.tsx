import { Mic, Plus, SendHorizonal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { cookieStorage } from "@ibnlanre/portal";
import useWs from "@/hooks/use-ws";
import { MessageTypes } from "./types";

export default function TextMessage({ user }: { user: MessageTypes }) {
  const [message, setMessage] = useState("");
  const { user_details } = user;

  let token = cookieStorage.getItem("duduzili-auth");
  if (token) {
    token = JSON.parse(token)?.access_token;
  }

  const [ready, messages, send] = useWs(
    `wss://duduzili-staging-server.info/ws/admin-chat/${user_details.username}/?token=${token}`
  );

  const sendMessage = () => {
    const body = {
      command: "send",
      message: {
        text: message,
      },
    };

    send(JSON.stringify(body));
    setMessage("");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendMessage();
      }}
      className='flex items-center justify-between gap-3 px-5 text-slate-600 pt-3 pb-2 ext-center'>
      <Plus />
      <Mic />
      <Input
        placeholder='Type message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className='border-[#D9D9DB] rounded-lg placeholder:text-[#8F8E93] placeholder:font-sora placeholder:text-xs font-normal'
      />
      <button
        type='submit'
        className='bg-[#4534B8] rounded-full text-white p-2'>
        <SendHorizonal size={16} />
      </button>
    </form>
  );
}
