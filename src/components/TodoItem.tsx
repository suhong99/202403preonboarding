import { useAppDispatch } from '../store/hooks/useRedux';
import { TodoState, __deleteTodo } from '../store/todoSlice';
import Button from './shared/Button';

function TodoItem({ todo }: { todo: TodoState }) {
  const dispatch = useAppDispatch();
  const deleteTodo = () => {
    dispatch(__deleteTodo(todo.id));
  };
  return (
    <div className="w-full max-2xl flex flex-col items-center border py-2 aspect-video ">
      <div className="flex-grow break-all px-3">{todo.detail}</div>
      <Button onClick={deleteTodo} type="delete" />
    </div>
  );
}

export default TodoItem;
