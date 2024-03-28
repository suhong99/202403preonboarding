import { useEffect } from 'react';

const useDropKeyboard = (
  isOpen: boolean,
  value: string | undefined,
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>,
  list: { id: number; value: string }[],
  toggleOpen: () => void,
) => {
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
};

export default useDropKeyboard;
