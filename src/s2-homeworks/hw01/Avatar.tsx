import styles from "./message/Message.module.css";
import { AvatarProps } from "@/types/chat.project.types";

export const Avatar = ({ name, avatar, id }: AvatarProps) => {
  return (
    <img
      id={"hw1-avatar-" + id}
      src={avatar || "https://placeholder.com"}
      alt={`${name}'s avatar`}
      crossOrigin="anonymous"
      className={styles.avatar}
    />
  );
};
