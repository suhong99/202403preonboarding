import React from 'react';
import './DropDown.css';

interface WithChildrenProps {
  children: React.ReactNode;
}

interface WithToggleProps {
  isOpen: boolean;
  toggleOpen: () => void;
}
interface DropDownProps extends React.FC<WithChildrenProps> {
  Trigger: React.FC<WithToggleProps>;
  Menu: React.FC<MenuProps>;
  Item: React.FC;
}

const DropDown: DropDownProps = ({ children }) => {
  return <div className="dropdown">{children}</div>;
};

interface MenuProps extends WithChildrenProps {
  isOpen: boolean;
}

const Trigger: React.FC<WithToggleProps> = ({ isOpen, toggleOpen }) => {
  return (
    <div className={`trigger ${isOpen ? 'open' : ''}`} onClick={toggleOpen}>
      드롭 다운
    </div>
  );
};

const Menu: React.FC<MenuProps> = ({ children, isOpen }) => {
  return <>{isOpen && <div className="menu">{children}</div>}</>;
};

const Item = () => {
  return <div className="item">메뉴</div>;
};

DropDown.Trigger = Trigger;
DropDown.Menu = Menu;
DropDown.Item = Item;

export default DropDown;
