import React, { useEffect, useRef, useState } from 'react';
import './DropDown.css';
import { DropDownData } from '../../constant/data';

// 제네릭으로 타입 넘길것!
const DropDown: React.FC<{ list: DropDownData[] }> = ({ list }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropValue, setDropValue] = useState<string | undefined>();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const onOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isOpen) {
      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex((prevIndex) =>
            prevIndex === null
              ? list.length - 1
              : (prevIndex - 1 + list.length) % list.length,
          );
          break;
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex((prevIndex) =>
            prevIndex === null ? 0 : (prevIndex + 1) % list.length,
          );
          break;
        default:
          break;
      }
    }
  };

  const handleDocumentClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
      setSelectedIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    if (selectedIndex !== null) {
      setDropValue(list[selectedIndex].value);
    } else {
      setDropValue(undefined);
    }
  }, [selectedIndex, list]);

  return (
    <>
      {/* header */}
      <div
        ref={dropdownRef}
        className={`dropHeader ${isOpen ? 'open' : ''}`}
        onClick={onOpenHandler}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <span>{dropValue ? dropValue : '선택'}</span>
        <div className="dropIcon">{isOpen ? '⌃' : '⌄'}</div>
      </div>
      <div className="dropdown-menu">
        <div className="dropdown-detail">
          {isOpen &&
            list.map(({ id, value, label }, index) => (
              <React.Fragment key={id}>
                <label htmlFor="drop-detail" className="sr-only">
                  {label}
                </label>
                <div
                  className={`dropdown-value ${
                    index === selectedIndex ? 'selected' : ''
                  }`}
                >
                  {value}
                </div>
              </React.Fragment>
            ))}
        </div>
      </div>
    </>
  );
};

export default DropDown;
