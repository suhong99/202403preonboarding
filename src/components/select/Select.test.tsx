import userEvent from '@testing-library/user-event';
import Select from './Select';
import { render, screen } from '@testing-library/react';

it('셀렉트가 초기에 "선택해주세요"로 렌더링 되고, item이 렌더링 되지 않는지', () => {
  render(<Select />);

  expect(screen.getByText('선택해주세요')).toBeInTheDocument();
  expect(screen.queryByTestId('dropdown-item')).not.toBeInTheDocument();
});

it('클릭 시 열리면서 item들이 보이는가', async () => {
  render(<Select />);
  const trigger = screen.getByRole('button');
  await userEvent.click(trigger);
  const dropdownItems = screen.getAllByTestId('dropdown-item');
  expect(dropdownItems.length).toBeGreaterThan(0);
});

it('아이템 선택 클릭시 value값이 선택되면서 닫히는가', async () => {
  render(<Select />);
  const trigger = screen.getByRole('button');
  await userEvent.click(trigger);
  const dropdownItems = screen.getAllByTestId('dropdown-item');
  const value = dropdownItems[0].textContent;
  await userEvent.click(dropdownItems[0]);
  expect(trigger).toHaveTextContent(value as string);
  expect(screen.queryByTestId('dropdown-item')).not.toBeInTheDocument();
});

describe('키보드 이벤트', () => {
  it('열린 후 키보드로 조작되는가?', async () => {
    render(<Select />);
    const trigger = screen.getByRole('button');
    await userEvent.click(trigger);
    const dropdownItems = screen.getAllByTestId('dropdown-item');
    const value = dropdownItems[0].textContent;
    await userEvent.keyboard('{arrowdown}');
    expect(trigger).toHaveTextContent(value as string);
    expect(dropdownItems[0]).toHaveClass('current');

    await userEvent.keyboard('{arrowdown}');
    expect(trigger).toHaveTextContent(dropdownItems[1].textContent as string);
    expect(dropdownItems[1]).toHaveClass('current');

    await userEvent.keyboard('{arrowup}');
    expect(trigger).toHaveTextContent(value as string);
    expect(dropdownItems[0]).toHaveClass('current');

    await userEvent.keyboard('{enter}');
    expect(screen.queryByTestId('dropdown-item')).not.toBeInTheDocument();
  });
});

it('열린 셀렉트가 외부 영역 클릭시 닫히는가?', async () => {
  render(<Select />);
  const trigger = screen.getByRole('button');
  await userEvent.click(trigger);

  // Select 컴포넌트 외부 영역을 클릭합니다.
  const outsideArea = document.body;
  await userEvent.click(outsideArea);
  expect(screen.queryByTestId('dropdown-item')).not.toBeInTheDocument();
});
