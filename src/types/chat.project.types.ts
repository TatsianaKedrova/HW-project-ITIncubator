export type MessageType = {
  id: number;
  user: {
    avatar: string;
    name: string;
  };
  message: {
    text: string;
    time: string;
  };
};

export type MessagePropsType = {
  message: MessageType;
};

export type AvatarProps = {
  avatar: string;
  time: string;
  id: number;
  name: string;
};
