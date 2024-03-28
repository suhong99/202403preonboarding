import { useEffect } from 'react';

const useDropClick = (
  isOpen: boolean,
  toggleOpen: () => void,
  dropdownRef: React.RefObject<HTMLDivElement>,
) => {
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
  }, [isOpen, toggleOpen, dropdownRef]);
};

export default useDropClick;
