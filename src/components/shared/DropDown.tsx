import React, { useState } from 'react';
import './DropDown.css';
import { DropDownData } from '../constant/data';

// 제네릭으로 타입 넘길것!
const DropDown: React.FC<{ list: DropDownData[] }> = ({ list }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  const [dropValue, setDropValue] = useState<string | undefined>();

  const dropHeaderClass = `dropHeader ${isOpen ? 'open' : ''}`;

  return (
    <>
      {/* header */}
      <div className={dropHeaderClass} onClick={onOpenHandler}>
        <span>{dropValue ? dropValue : '선택'}</span>
        <div className="dropIcon">{isOpen ? '⌃' : '⌄'}</div>
      </div>
      {isOpen &&
        list.map(({ id, value, label }) => (
          <React.Fragment key={id}>
            <label>{label}</label>
            <div>{value}</div>
          </React.Fragment>
        ))}
    </>
  );
};

export default DropDown;

const DropDownMenu = () => {
  return <div>메뉴</div>;
};
