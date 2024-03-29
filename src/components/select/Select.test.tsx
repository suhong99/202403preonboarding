import Select from './Select';
import { render, screen } from '@testing-library/react';

describe('셀렉트가 제대로 랜더링 되는지', () => {
  it('renders App component', () => {
    render(<Select />);

    expect(screen.getByText('선택해주세요')).toBeInTheDocument();
  });
});
