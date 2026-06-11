import { MessagePropsType } from "@/types/chat.project.types";
import s from "./Message.module.css";
import { AvatarEditorModal } from "./AvatarEditorModal";

// нужно отобразить приходящие данные
export const Message = ({ message }: MessagePropsType) => {
  return (
    <div id={"hw1-message-" + message.id} className={s.message}>
      <div className={s.imageAndText}>
        <AvatarEditorModal />
        {/* <img
          id={"hw1-avatar-" + message.id}
          // создаёт студент

          //
        /> */}
        <div className={s.text}>
          <div id={"hw1-name-" + message.id} className={s.name}>
            {/*создаёт студент*/}

            {/**/}
          </div>
          <pre id={"hw1-text-" + message.id} className={s.messageText}>
            {/*создаёт студент*/}

            {/**/}
          </pre>
        </div>
      </div>
      <div id={"hw1-time-" + message.id} className={s.time}>
        {/*создаёт студент*/}

        {/**/}
      </div>
    </div>
  );
};
