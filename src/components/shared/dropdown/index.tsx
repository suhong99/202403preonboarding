import React from 'react';

interface WithChildrenProps {
  children: React.ReactNode;
}
interface DropDownComponent extends React.FC<WithChildrenProps> {
  Trigger: React.FC;
  Menu: React.FC<WithChildrenProps>;
  Item: React.FC;
}

const DropDown: DropDownComponent = ({ children }) => {
  return <div>{children}</div>;
};

const Trigger = () => {
  return <div>드롭 다운</div>;
};

const Menu: React.FC<WithChildrenProps> = ({ children }) => {
  return <div>{children}</div>;
};

const Item = () => {
  return <div>메뉴</div>;
};

DropDown.Trigger = Trigger;
DropDown.Menu = Menu;
DropDown.Item = Item;
export default DropDown;
