import React from 'react';
import './DropDown.css';

interface DropDownProps {
  isOpen: boolean;
  toggleOpen: () => void;
  children: React.ReactNode;
  value?: string;
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
}

interface WithChildrenProps {
  children: React.ReactNode;
}

interface DropDownContainer extends React.FC<WithChildrenProps> {
  Trigger: React.FC<TriggerProps>;
  Menu: React.FC<MenuProps>;
  Item: React.FC<ItemProps>;
}

const DropDown: DropDownContainer = ({ children }) => {
  return <div className="dropdown">{children}</div>;
};

type TriggerProps = Omit<DropDownProps, 'setValue' | 'children'>;

const Trigger: React.FC<TriggerProps> = ({ isOpen, toggleOpen, value }) => {
  return (
    <div
      className={`trigger text ${isOpen ? 'open' : ''}`}
      onClick={toggleOpen}
    >
      {value ? value : '선택해주세요'}
    </div>
  );
};

interface MenuProps extends WithChildrenProps {
  isOpen: boolean;
}

const Menu: React.FC<MenuProps> = ({ children, isOpen }) => {
  return <>{isOpen && <div className="menu">{children}</div>}</>;
};

type ItemProps = Omit<DropDownProps, 'isOpen' | 'children'>;

const Item: React.FC<ItemProps> = ({ value, setValue, toggleOpen }) => {
  const onClickValue = () => {
    setValue(value);
    toggleOpen();
  };
  return (
    <div className="text item" onClick={onClickValue}>
      {value}
    </div>
  );
};

DropDown.Trigger = Trigger;
DropDown.Menu = Menu;
DropDown.Item = Item;

export default DropDown;
