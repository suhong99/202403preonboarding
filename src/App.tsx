import TodoAdder from './components/TodoAdder';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto max-w-80">
      <header className="text-center text-2xl my-5 font-extrabold">
        프리온 보딩 TODO LIST
      </header>
      <TodoAdder />
      <TodoList />
    </div>
  );
}

export default App;
