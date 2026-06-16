import { MessageType } from "@/types/chat.project.types";
import styles from "./ChatMessage.module.css";

export const ChatMessage = ({
  message,
  outgoing,
}: {
  message: MessageType;
  outgoing: boolean;
}) => {
  const { user, message: content } = message;
  const { name, avatar } = user;
  const { text, time } = content;

  const avatarBlock = (
    <div className={styles.avatarBlock}>
      <img
        src={avatar || "https://placeholder.com"}
        alt={`${name}'s avatar`}
        crossOrigin="anonymous"
        className={styles.avatar}
      />
      <span className={styles.time}>{time}</span>
    </div>
  );

  return (
    <div
      className={`${styles.row} ${outgoing ? styles.outgoing : styles.incoming}`}
    >
      {avatarBlock}
      <div
        className={`${styles.bubble} ${
          outgoing ? styles.bubbleOutgoing : styles.bubbleIncoming
        }`}
      >
        <p
          className={`${styles.name} ${
            outgoing ? styles.nameOutgoing : styles.nameIncoming
          }`}
        >
          {name}
        </p>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};
