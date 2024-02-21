import { useAppDispatch } from '../store/hooks/useRedux';
import { TodoState, __deleteTodo } from '../store/todoSlice';
import Button from './Button';

function TodoItem({ todo }: { todo: TodoState }) {
  const dispatch = useAppDispatch();
  const deleteTodo = () => {
    dispatch(__deleteTodo(todo.id));
  };
  return (
    <div className="flex flex-row">
      <div>{todo.detail}</div>
      <Button onClick={deleteTodo} type="delete" />
    </div>
  );
}

export default TodoItem;
