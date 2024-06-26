import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';

export interface TodoState {
  id: number;
  detail: string;
}

const initialState: TodoState[] = [
  { id: 1234, detail: '과제 1번 하기' },
  { id: 1235, detail: '과제 2번 하기' },
  { id: 1236, detail: '스토리북 적용하기' },
  { id: 1237, detail: '테스트코드 작성하기' },
];

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    __addTodo: (state, action: PayloadAction<Pick<TodoState, 'detail'>>) => {
      const lastId = state[state.length - 1].id + 1;
      state.push(Object.assign(action.payload, { id: lastId }));
    },
    __deleteTodo: (state, action: PayloadAction<number>) => {
      const target = state.findIndex((post) => post.id === action.payload);
      state.splice(target, 1);
    },
  },
});

export const { __addTodo, __deleteTodo } = todoListSlice.actions;
export const __todoList = (state: RootState) => state.todoList;

export default todoListSlice.reducer;
