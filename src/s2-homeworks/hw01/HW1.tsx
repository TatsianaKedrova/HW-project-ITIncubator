import MessageSender from "./message-sender/MessageSender";
import s2 from "@/s1-main/App.module.css";
import FriendMessage from "./friend-message/FriendMessage";
import avatar from "./avatar.png";
import { MessageType } from "@/types/chat.project.types";
import { Message } from "./message/Message";
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
    avatar: avatar, // можно менять
    name: "Tania", // можно менять
  },
  message: {
    text: "Hi, Bred! It's me, Tania", // можно менять
    time: Date.now().toString(), // можно менять
  },
};
export const friendMessage0: MessageType = {
  id: 100,
  user: {
    avatar: avatar, // можно менять
    name: "Bred", // можно менять
  },
  message: {
    text: "зеркальное сообщение для тренировки css", // можно менять
    time: Date.now().toString(), // можно менять
  },
};

const HW1 = () => {
  return (
    <div id={"hw1"}>
      <div className={s2.hwTitle}>Homework #1</div>
      <div className={s2.hw}>
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
