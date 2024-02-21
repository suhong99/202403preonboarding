import { useAppSelector } from '../store/hooks/useRedux';
import { __todoList, TodoState } from '../store/todoSlice';

function TodoList() {
  const list = useAppSelector(__todoList);
  console.log(list, list);

  return (
    <div>
      {list.map((todo: TodoState) => (
        <div key={todo.id}>{todo.detail}</div>
      ))}
    </div>
  );
}

export default TodoList;
