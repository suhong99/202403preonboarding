import userEvent from '@testing-library/user-event';
import Select from './Select';
import { render, screen } from '@testing-library/react';

const setUpDropOpen = async () => {
  render(<Select />);
  const trigger = screen.getByRole('button');
  await userEvent.click(trigger);
  return trigger;
};

it('셀렉트가 초기에 "선택해주세요"로 렌더링 되고, 드롭다운이 닫혔는가', () => {
  render(<Select />);

  expect(screen.getByText('선택해주세요')).toBeInTheDocument();
  expect(screen.queryByTestId('dropdown-item')).not.toBeInTheDocument();
});

it('클릭 시 열리면서 item들이 보이는가', async () => {
  await setUpDropOpen();
  expect(screen.getAllByTestId('dropdown-item')[0]).toBeInTheDocument();
});

describe('셀렉트가 열린 상태에서', () => {
  it('아이템 선택 클릭시 value값이 선택되면서 닫히는가', async () => {
    const trigger = await setUpDropOpen();
    const dropdownItems = screen.getAllByTestId('dropdown-item');
    const value = dropdownItems[0].textContent;
    await userEvent.click(dropdownItems[0]);
    expect(trigger).toHaveTextContent(value as string);
    expect(screen.queryByTestId('dropdown-item')).not.toBeInTheDocument();
  });

  describe('키보드 이벤트가 작동하는가?', () => {
    it('열린 후 키보드로 벨류 값이 조작되는가?', async () => {
      const trigger = await setUpDropOpen();

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
    });

    it('열렸을 때, enter 혹은 esc로 닫히는가?', async () => {
      const trigger = await setUpDropOpen();

      await userEvent.keyboard('{enter}');
      expect(screen.queryByTestId('dropdown-item')).not.toBeInTheDocument();

      await userEvent.click(trigger);
      const dropdownItems = screen.getAllByTestId('dropdown-item');
      expect(dropdownItems.length).toBeGreaterThan(0);

      await userEvent.keyboard('{escape}');
      expect(screen.queryByTestId('dropdown-item')).not.toBeInTheDocument();
    });
  });

  it('외부 영역 클릭시 닫히는가?', async () => {
    await setUpDropOpen();

    // Select 컴포넌트 외부 영역을 클릭합니다.
    const outsideArea = document.body;
    await userEvent.click(outsideArea);
    expect(screen.queryByTestId('dropdown-item')).not.toBeInTheDocument();
  });
});
