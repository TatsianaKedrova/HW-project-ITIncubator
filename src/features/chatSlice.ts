import { MessageType } from "@/types/chat.project.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type ChatState = MessageType[];
export const chatSlice = createSlice({
  name: "chat_app",
  initialState: [] as MessageType[],
  reducers: {
    addMessage: (state: MessageType[], action: PayloadAction<MessageType>) => {
      state.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export const chatReducer = chatSlice.reducer;
