import Button from './Button'

function TodoAdder() {
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
      />
      <Button onClick={() => {}} type="add" />
    </div>
  )
}

export default TodoAdder
