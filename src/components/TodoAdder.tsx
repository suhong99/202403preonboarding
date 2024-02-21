import { useState } from 'react';
import Button from './Button';
import { useAppDispatch } from '../store/hooks/useRedux';
import { nanoid } from 'nanoid';
import { __addTodo } from '../store/todoSlice';
function TodoAdder() {
  const dispatch = useAppDispatch();

  const [todo, setTodo] = useState<string>('');

  const addTodo = () => {
    dispatch(__addTodo({ id: nanoid(), detail: todo }));
  };

  return (
    <div>
      <label htmlFor="todoInput" className="sr-only">
        TodoInput
      </label>
      <input
        type="text"
        id="todoInput"
        placeholder="할일을 기록하세요"
        className="mt-1 w-full max-w-96 rounded-md py-3 border-gray-200 shadow-sm sm:text-sm"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button onClick={addTodo} type="add" />
    </div>
  );
}

export default TodoAdder;
