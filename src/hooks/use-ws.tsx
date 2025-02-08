"use client";

import { useEffect, useState } from "react";

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
        const parsedMessage = JSON.parse(event.data);
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
