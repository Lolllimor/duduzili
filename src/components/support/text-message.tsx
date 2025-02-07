import { Mic, Plus, Search, SendHorizonal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { cookieStorage } from "@ibnlanre/portal";
import useWs from "@/hooks/use-ws";

export default function TextMessage() {
  const [message, setMessage] = useState("");
  let token = cookieStorage.getItem("duduzili-auth");
  if (token) {
    token = JSON.parse(token)?.access_token;
  }

  const [ready, messages, send] = useWs(
    `wss://duduzili-staging-server.info/ws/admin-chat/adfwfwr/?token=${token}`
  );

  useEffect(() => {
    const handleSendMessage = () => {
      const messageData = {
        command: "join",
      };
      console.log("ready");
      send(JSON.stringify(messageData));
    };

    handleSendMessage();
  }, []);

  console.log(ready, messages);

  const sendMessage = () => {
    send(message);
    setMessage("");
  };

  return (
    <div className="flex items-center justify-between gap-3 px-5 text-slate-600 pt-3 pb-2 ext-center">
      <Plus />
      <Mic />
      <Input
        placeholder="Type message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border-[#D9D9DB] rounded-lg placeholder:text-[#8F8E93] placeholder:font-sora placeholder:text-xs font-normal"
      />
      <button
        onClick={() => sendMessage()}
        className="bg-[#4534B8] rounded-full text-white p-2"
      >
        <SendHorizonal size={16} />
      </button>
    </div>
  );
}
