import MessageSender from "./message-sender/MessageSender";
import styles from "@/s1-main/App.module.css";
import FriendMessage from "./friend-message/FriendMessage";
import myAvatarPhoto from "@/assets/my-avatar-photo.jpg";
import { MessageType } from "@/types/chat.project.types";
import { Message } from "./message/Message";
import { useRef } from "react";
/*
 * 1 - описать тип MessageType
 * 2 - описать тип MessagePropsType в файле Message.tsx
 * 3 - в файле Message.tsx отобразить приходящие данные
 * 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
 * 5 - сделать стили в соответствии с дизайном
 * */

// структуру объекта не менять
export const message0: MessageType = {
  id: 0,
  user: {
    avatar: myAvatarPhoto, // можно менять
    name: "Tania", // можно менять
  },
  message: {
    text: "Hi, Bred! It's me, Tania", // можно менять
    time: "09:00", // можно менять
  },
};
export const friendMessage0: MessageType = {
  id: 100,
  user: {
    avatar: myAvatarPhoto, // можно менять
    name: "Bred", // можно менять
  },
  message: {
    text: "зеркальное сообщение для тренировки css", // можно менять
    time: "09:01", // можно менять
  },
};

const HW1 = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div id={"hw1"} className={styles.hw}>
      <header className={styles.headerContainer}>
        <h1 className={styles.hwTitle}>{"Hometask \u2116 1"}</h1>
      </header>
      <div ref={scrollRef} className={styles.messagesContainer}>
        {/*проверка отображения (не менять)*/}
        <div>
          <Message message={message0} />
          <FriendMessage message={friendMessage0} />
        </div>

        {/*для автоматической проверки дз (не менять)*/}
        <MessageSender M={Message} />
      </div>
    </div>
  );
};

export default HW1;
