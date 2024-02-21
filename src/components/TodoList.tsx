import { useAppSelector } from '../store/hooks/useRedux';
import { __todoList, TodoState } from '../store/todoSlice';
import TodoItem from './TodoItem';

function TodoList() {
  const list = useAppSelector(__todoList);

  return (
    <>
      {list.map((todo: TodoState) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
}

export default TodoList;
