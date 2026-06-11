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
  message: {
    id: number;
  };
};
