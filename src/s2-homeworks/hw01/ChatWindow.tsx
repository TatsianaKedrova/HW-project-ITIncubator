import type React from "react";

import { useRef, useState } from "react";
import styles from "./ChatWindow.module.css";
import { MessageType } from "@/types/chat.project.types";
import { ChatMessage } from "./ChatMessage";
import myAvatarPhoto from "@/assets/my-avatar-photo.jpg";

const AVATAR = myAvatarPhoto;

// The current user — messages from this name are rendered as outgoing.
const CURRENT_USER = "Ivan";

const initialMessages: MessageType[] = [
  {
    id: 1,
    user: { name: "Ivan", avatar: AVATAR },
    message: {
      text: "Hello, she didn't do anything and rested all day, how are you?",
      time: "09:01",
    },
  },
  {
    id: 2,
    user: { name: "Anna", avatar: AVATAR },
    message: {
      text: "Hello, how are you, what did you do yesterday?",
      time: "09:00",
    },
  },
];

export function ChatWindow() {
  const [messages, setMessages] = useState<MessageType[]>(initialMessages);
  const [draft, setDraft] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;

    const now = new Date();
    const time = `${String(now.getHours()).padStart(2, "0")}:${String(
      now.getMinutes(),
    ).padStart(2, "0")}`;

    setMessages((prev) => [
      {
        id: Date.now(),
        user: { name: CURRENT_USER, avatar: AVATAR },
        message: { text, time },
      },
      ...prev,
    ]);
    setDraft("");
  }

  return (
    <div className={styles.window}>
      <header className={styles.header}>
        <h1 className={styles.title}>Hometask № 1</h1>
      </header>

      <div ref={scrollRef} className={styles.messages}>
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            outgoing={message.user.name === CURRENT_USER}
          />
        ))}
      </div>

      <form onSubmit={handleSend} className={styles.form}>
        <input
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.currentTarget.value)}
          placeholder="Type a message"
          aria-label="Type a message"
          className={styles.input}
        />
        <button type="submit" className={styles.sendButton}>
          Send
        </button>
      </form>
    </div>
  );
}
