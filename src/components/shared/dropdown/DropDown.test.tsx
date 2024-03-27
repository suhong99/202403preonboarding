import React from 'react';
import { render, screen } from '@testing-library/react';
import DropDown from '.';

test('드롭다운 테스트', () => {
  render(<div>드롭 다운</div>);
  // <DropDown>
  //   <DropDown.Trigger ></DropDown.Trigger>
  // </DropDown>,
  const linkElement = screen.getByText(/드롭 다운/i);
  expect(linkElement).toBeInTheDocument();
});
