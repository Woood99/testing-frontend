import { render, screen, fireEvent } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import App from './App';

describe('test app', () => {
   test('renders learn react link', async () => {
      render(<App />);
      // const helloWorldElem = screen.queryByText(/hello!/i);
      // expect(helloWorldElem).toBeInTheDocument();

      const helloWorldElem = await screen.findByText(/data/i, {}, { timeout: 3000 });
      expect(helloWorldElem).toBeInTheDocument();
   });

   test('click event', () => {
      render(<App />);

      const btn = screen.getByTestId('toggle-btn');
      expect(screen.queryByTestId('toggle-elem')).toBeNull();
      fireEvent.click(btn);
      expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
      fireEvent.click(btn);
      expect(screen.queryByTestId('toggle-elem')).toBeNull();
   });

   test('input event', () => {
      render(<App />);

      const input = screen.getByTestId('input-elem');

      expect(screen.queryByTestId('toggle-btn')).toBeInTheDocument();
      fireEvent.input(input, { target: { value: '2' } });
      expect(screen.queryByTestId('toggle-btn')).toBeNull();
      fireEvent.input(input, { target: { value: '' } });
      expect(screen.queryByTestId('toggle-btn')).toBeInTheDocument();
   });

   test('input event2', () => {
      render(<App />);

      const input = screen.getByPlaceholderText(/input value.../i);
      expect(screen.queryByTestId('value-elem')).toHaveTextContent('');
      fireEvent.input(input, { target: { value: '77' } });
      expect(screen.queryByTestId('value-elem')).toHaveTextContent('77');
   });

   test('input event3', () => {
      render(<App />);

      const input = screen.getByPlaceholderText(/input value.../i);
      expect(screen.queryByTestId('value-elem')).toHaveTextContent('');
      UserEvent.type(input, '77');
      expect(screen.queryByTestId('value-elem')).toHaveTextContent('77');
   });
});
