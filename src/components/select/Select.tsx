import DropDown from '../shared/dropdown';
import useDropDown from '../shared/dropdown/hook/useDropDown';
import { DropDown_Data } from '../constant/data';

const Select = () => {
  const [isOpen, toggleOpen, value, selectValue] = useDropDown();

  return (
    <DropDown isOpen={isOpen} toggleOpen={toggleOpen}>
      <DropDown.Trigger isOpen={isOpen} toggleOpen={toggleOpen} value={value} />
      <DropDown.Menu
        isOpen={isOpen}
        value={value}
        setValue={selectValue}
        list={DropDown_Data}
        toggleOpen={toggleOpen}
      >
        {DropDown_Data.map((item) => {
          return (
            <DropDown.Item
              key={item.id}
              value={item.value}
              selected={item.value === value}
              toggleOpen={toggleOpen}
              setValue={selectValue}
            ></DropDown.Item>
          );
        })}
      </DropDown.Menu>
    </DropDown>
  );
};

export default Select;
