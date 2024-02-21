import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';

export interface TodoState {
  id: string;
  detail: string;
}

const initialState: TodoState[] = [{ id: '1234', detail: '테스트용' }];

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    __addTodo: (state, action: PayloadAction<TodoState>) => {
      state.push(action.payload);
    },
    __deleteTodo: (state, action: PayloadAction<string>) => {
      const target = state.findIndex((post) => post.id === action.payload);
      state.splice(target, 1);
    },
  },
});

export const { __addTodo, __deleteTodo } = todoListSlice.actions;
export const __todoList = (state: RootState) => state.todoList;

export default todoListSlice.reducer;
