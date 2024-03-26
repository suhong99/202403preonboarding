import React from 'react';

interface DropDownProps {
  children: React.ReactNode;
}

interface DropDownComponent extends React.FC<DropDownProps> {
  Trigger: React.FC;
  Menu: React.FC;
  Item: React.FC;
}

const DropDown: DropDownComponent = ({ children }) => {
  return <div>{children}</div>;
};

const Trigger = () => {
  return <div>드롭 다운</div>;
};

const Menu = () => {
  return <div>메뉴</div>;
};

const Item = () => {
  return <div>메뉴</div>;
};

DropDown.Trigger = Trigger;
DropDown.Menu = Menu;
DropDown.Item = Item;
export default DropDown;
