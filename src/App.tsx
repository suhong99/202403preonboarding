import TodoAdder from './components/TodoAdder';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto max-w-3xl">
      <header className="text-center">TODO LIST</header>
      <TodoAdder />
      <TodoList />
    </div>
  );
}

export default App;
