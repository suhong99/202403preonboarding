import TodoAdder from './components/List/TodoAdder';
import TodoList from './components/List/TodoList';
import { DropDown_Data } from './components/constant/data';
import DropDown from './components/shared/dropdown';
function App() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto max-w-80">
      <header className="text-center text-2xl my-5 font-extrabold">
        프리온 보딩 TODO LIST
      </header>
      <DropDown>
        <DropDown.Trigger></DropDown.Trigger>
        <DropDown.Menu>
          <DropDown.Item></DropDown.Item>
        </DropDown.Menu>
      </DropDown>
      <TodoAdder />
      {/* <TodoList /> */}
    </div>
  );
}

export default App;
