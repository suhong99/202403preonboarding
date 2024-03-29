import React from 'react';
import { fireEvent, renderHook } from '@testing-library/react';
import useDropClick from './hook/useDropClick';

// Mocking useRef (gpt 활용,,,)
const useRefMock = jest.spyOn(React, 'useRef');

describe('useDropClick', () => {
  let addEventListenerMock: jest.SpyInstance<
    void,
    [
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions | undefined,
    ]
  >;
  let removeEventListenerMock: jest.SpyInstance<
    void,
    [
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | EventListenerOptions | undefined,
    ]
  >;
  let toggleOpen: jest.Mock<any, any>;
  // dropdownRef를 명시적으로 타입 캐스팅
  let dropdownRef: React.MutableRefObject<HTMLDivElement | null> = {
    current: document.createElement('div'),
  };
  // 각 테스트 케이스에서 사용할 변수들을 초기화
  beforeEach(() => {
    addEventListenerMock = jest.spyOn(document, 'addEventListener');
    removeEventListenerMock = jest.spyOn(document, 'removeEventListener');
    toggleOpen = jest.fn();
    dropdownRef = { current: document.createElement('div') };
    useRefMock.mockReturnValue(dropdownRef);
  });
  //각 테스트 케이스 실행 후에 모든 스파이들을 초기화하기 위해 afterEach 함수를 사용
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should add and remove click event listener', () => {
    // useDropClick 훅을 렌더링

    renderHook(() => useDropClick(true, toggleOpen, dropdownRef));
    // addEventListener 함수가 호출되는지 확인
    expect(addEventListenerMock).toHaveBeenCalledWith(
      'click',
      expect.any(Function),
    );
    expect(removeEventListenerMock).not.toHaveBeenCalled();

    //document에 클릭 이벤트를 발생
    fireEvent(document, new MouseEvent('click'));
    // toggleOpen 함수가 호출되는지 확인(호출되면 닫힘)
    expect(toggleOpen).toHaveBeenCalled();
  });
});
