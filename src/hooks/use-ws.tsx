"use client";

import { decrypt } from "@/lib/decrypt";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useWs(
  url: string
): [boolean, any[], (message: string) => void] {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket(url);

    socket.onopen = () => {
      setIsReady(true);
    };

    socket.onmessage = (event) => {
      try {
        let message = event.data;

        let dataStr = typeof message === "string" ? message : "";

        dataStr = dataStr
          .replace(/'/g, '"') // Replace single quotes with double quotes
          .replace(/True/g, "true") // Replace Python True with JSON true
          .replace(/False/g, "false") // Replace Python False with JSON false
          .replace(/None/g, "null"); // Replace Python None with JSON null

        const parsedMessage = JSON.parse(dataStr);
        setMessages((prev) => [...prev, parsedMessage]);
      } catch (error) {
        console.error("Failed to parse message:", error);
      }
    };

    socket.onclose = () => {
      setIsReady(false);
    };

    setWs(socket);

    return () => {
      socket.close();
    };
  }, [url]);

  const sendMessage = (message: string) => {
    if (ws && isReady) {
      ws.send(message);
    }
  };

  return [isReady, messages, sendMessage];
}
