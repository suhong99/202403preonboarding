import { TodoState } from '../store/todoSlice';

function TodoItem(todo: TodoState) {
  return <div>{todo.detail}</div>;
}

export default TodoItem;
