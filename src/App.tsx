import TodoAdder from './components/TodoAdder';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <header>TODO LIST</header>
      <TodoAdder />
      <TodoList />
    </div>
  );
}

export default App;
