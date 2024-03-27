import TodoAdder from './components/list/TodoAdder';
import TodoList from './components/list/TodoList';
import Select from './components/select/Select';
function App() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto max-w-80">
      <header className="text-center text-2xl my-5 font-extrabold">
        프리온 보딩 TODO LIST
      </header>
      <Select />
      <TodoAdder />
      <TodoList />
    </div>
  );
}

export default App;
