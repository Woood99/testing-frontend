import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../../tests/helpers/renderWithRouter';
import { screen } from '@testing-library/dom';

describe('Counter test', () => {
   test('test default', () => {
      renderWithRouter();
      const incrementBtn = screen.getByTestId('counter-increment-btn');
      const decrementBtn = screen.getByTestId('counter-decrement-btn');
      expect(screen.getByTestId('counter-value')).toHaveTextContent('0');
      userEvent.click(incrementBtn);
      expect(screen.getByTestId('counter-value')).toHaveTextContent('1');
      userEvent.click(decrementBtn);
      expect(screen.getByTestId('counter-value')).toHaveTextContent('0');
   });
   test('test initial value', () => {
      renderWithRouter('/', { counter: { value: 5 } });
      const incrementBtn = screen.getByTestId('counter-increment-btn');
      const decrementBtn = screen.getByTestId('counter-decrement-btn');
      expect(screen.getByTestId('counter-value')).toHaveTextContent('5');
      userEvent.click(incrementBtn);
      expect(screen.getByTestId('counter-value')).toHaveTextContent('6');
      userEvent.click(decrementBtn);
      expect(screen.getByTestId('counter-value')).toHaveTextContent('5');
   });
});
