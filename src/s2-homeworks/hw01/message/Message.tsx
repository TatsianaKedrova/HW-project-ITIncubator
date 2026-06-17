import { MessagePropsType } from "@/types/chat.project.types";
import s from "./Message.module.css";
import { Avatar } from "../Avatar";

// нужно отобразить приходящие данные
export const Message = ({ message }: MessagePropsType) => {
  return (
    <div id={"hw1-message-" + message.id} className={s.message}>
      <div className={s.imageAndText}>
        <Avatar
          id={message.id}
          avatar={message.user.avatar}
          time={message.message.time}
          name={message.user.name}
        />
        <div className={s.text}>
          <div id={"hw1-name-" + message.id} className={s.name}>
            {message.user.name}
          </div>
          <pre id={"hw1-text-" + message.id} className={s.messageText}>
            {message.message.text}
          </pre>
        </div>
      </div>
      <div id={"hw1-time-" + message.id} className={s.time}>
        <span className={s.time}>{message.message.time}</span>

        {/**/}
      </div>
    </div>
  );
};
