import React, { useEffect, useRef } from 'react';
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

interface DropDownContainer
  extends React.FC<
    WithChildrenProps & Pick<DropDownProps, 'isOpen' | 'toggleOpen'>
  > {
  Trigger: React.FC<TriggerProps>;
  Menu: React.FC<MenuProps>;
  Item: React.FC<ItemProps>;
}

const DropDown: DropDownContainer = ({ children, isOpen, toggleOpen }) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // 전역 클릭 이벤트 핸들러
  useEffect(() => {
    const handleGlobalClick = (event: MouseEvent) => {
      // 클릭한 위치가 드롭다운 영역 내부인지 확인
      if (
        isOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        toggleOpen();
      }
    };
    document.addEventListener('click', handleGlobalClick);
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, [isOpen, toggleOpen]);

  return (
    <div className="dropdown" ref={dropdownRef}>
      {children}
    </div>
  );
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
  value: string | undefined;
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
  list: { id: number; value: string }[];
  toggleOpen: () => void;
}

const Menu: React.FC<MenuProps> = ({
  children,
  isOpen,
  setValue,
  toggleOpen,
  value,
  list,
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
        const itemCount = list.length;
        let newIndex = list.findIndex((item) => item.value === value);
        if (event.key === 'ArrowUp') {
          if (newIndex === -1) {
            newIndex = itemCount - 1;
          } else {
            newIndex = (newIndex - 1 + itemCount) % itemCount;
          }
        } else if (event.key === 'ArrowDown') {
          if (newIndex === -1) {
            newIndex = 0;
          } else {
            newIndex = (newIndex + 1) % itemCount;
          }
        }
        setValue(list[newIndex].value);
      }

      if (event.key === 'Enter' || event.key === 'Escape') {
        event.preventDefault();
        toggleOpen();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, value, setValue, list, toggleOpen]);

  return <>{isOpen && <div className="menu">{children}</div>}</>;
};

type ItemProps =
  | Omit<DropDownProps, 'isOpen' | 'children'> & { selected: boolean };

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
      className={`text item ${selected ? 'current' : ' '}`}
      onClick={onClickValue}
    >
      {value}
    </div>
  );
};

DropDown.Trigger = Trigger;
DropDown.Menu = Menu;
DropDown.Item = Item;

export default DropDown;
