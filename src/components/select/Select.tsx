import DropDown from '../shared/dropdown';
import useDropDown from '../shared/dropdown/hook/useDropDown';
import { DropDown_Data } from '../constant/data';

const Select = () => {
  const [isOpen, toggleOpen, value, selectValue] = useDropDown();
  return (
    <DropDown>
      <DropDown.Trigger isOpen={isOpen} toggleOpen={toggleOpen} value={value} />
      <DropDown.Menu isOpen={isOpen}>
        {DropDown_Data.map((e) => {
          return (
            <DropDown.Item
              key={e.id}
              value={e.value}
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
