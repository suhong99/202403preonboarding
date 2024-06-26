import { useState } from 'react';
import Button from '../shared/Button';
import { useAppDispatch } from '../../store/hooks/useRedux';
import { __addTodo } from '../../store/todoSlice';
import Input from '../shared/Input';
function TodoAdder() {
  const dispatch = useAppDispatch();

  const [todo, setTodo] = useState<string>('');

  const addTodo = () => {
    dispatch(__addTodo({ detail: todo }));
  };

  return (
    <div className="flex justify-center gap-2 w-full my-4">
      <Input value={todo} onChange={setTodo} />
      <Button onClick={addTodo} type="add" />
    </div>
  );
}

export default TodoAdder;
