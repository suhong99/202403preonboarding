import React, { useRef } from 'react';
import './DropDown.css';
import useDropKeyboard from './hook/useDropKeyboard';
import useDropClick from './hook/useDropClick';

interface DropDownProps {
  isOpen: boolean;
  toggleOpen: () => void;
  children: React.ReactNode;
  value?: string;
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
}

type DropDownContainerProps = React.FC<
  Omit<DropDownProps, 'value' | 'setValue'>
>;

const DropDownContainer: DropDownContainerProps = ({
  children,
  isOpen,
  toggleOpen,
}) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useDropClick(isOpen, toggleOpen, dropdownRef);

  return (
    <div className="dropdown" ref={dropdownRef}>
      {children}
    </div>
  );
};

type TriggerProps = Omit<DropDownProps, 'setValue' | 'children'>;

const Trigger: React.FC<TriggerProps> = ({ isOpen, toggleOpen, value }) => {
  return (
    <button
      className={`trigger text ${isOpen ? 'open' : ''}`}
      onClick={toggleOpen}
    >
      {value ? value : '선택해주세요'}
    </button>
  );
};

interface MenuProps extends DropDownProps {
  list: { id: number; value: string }[];
}

const Menu: React.FC<MenuProps> = ({
  children,
  isOpen,
  toggleOpen,
  value,
  setValue,
  list,
}) => {
  useDropKeyboard(isOpen, value, setValue, list, toggleOpen);

  return <>{isOpen && <div className="menu">{children}</div>}</>;
};

type ItemProps =
  | Omit<DropDownProps, 'isOpen' | 'children'> & {
      selected: boolean;
    };

const Item: React.FC<ItemProps> = ({
  value,
  setValue,
  toggleOpen,
  selected,
}) => {
  const onClickValue = () => {
    setValue(value);
    toggleOpen();
  };
  return (
    <div
      data-testid={'dropdown-item'}
      className={`text item ${selected ? 'current' : ' '}`}
      onClick={onClickValue}
    >
      {value}
    </div>
  );
};

export const DropDown = Object.assign(DropDownContainer, {
  Trigger,
  Menu,
  Item,
});
