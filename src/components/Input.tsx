type InputProps = {
  onChange: (value: string) => void;
  value: string;
};

function Input({ onChange, value }: InputProps) {
  return (
    <>
      <label htmlFor="todoInput" className="sr-only">
        TodoInput
      </label>
      <input
        type="text"
        id="todoInput"
        placeholder="할일을 기록하세요"
        className="mt-1 w-full max-w-2xl py-3 rounded-md border border-blue-500 sm:text-sm px-1"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}
export default Input;
