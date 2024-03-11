import TodoAdder from './components/List/TodoAdder';
import TodoList from './components/List/TodoList';
import DropDown from './components/shared/DropDown';
import { DropDown_Data } from './components/constant/data';
function App() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto max-w-80">
      <header className="text-center text-2xl my-5 font-extrabold">
        프리온 보딩 TODO LIST
      </header>
      <DropDown list={DropDown_Data} />
      <TodoAdder />
      <TodoList />
    </div>
  );
}

export default App;
