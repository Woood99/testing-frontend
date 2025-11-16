import { screen } from '@testing-library/react';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../tests/helpers/renderWithRouter';

jest.mock('axios');

describe('test app', () => {
   let response;

   beforeEach(() => {
      response = {
         data: [
            {
               id: 1,
               name: 'Leanne Graham',
               username: 'Bret',
            },
            {
               id: 2,
               name: 'Ervin Howell',
               username: 'Antonette',
            },
            {
               id: 3,
               name: 'Clementine Bauch',
               username: 'Samantha',
            },
         ],
      };
   });

   afterEach(() => {
      jest.clearAllMocks();
   });

   test('renders', async () => {
      axios.get.mockResolvedValue(response);
      renderWithRouter('/users');

      const users = await screen.findAllByTestId('user-item');
      expect(users.length).toBe(3);
      expect(axios.get).toHaveBeenCalledTimes(1);
      screen.debug();
   });

   test('test redirect to user page', async () => {
      axios.get.mockResolvedValue(response);
      renderWithRouter('/users');
      const users = await screen.findAllByTestId('user-item');
      expect(users.length).toBe(3);
      userEvent.click(users[0]);
      expect(screen.getByTestId('user-page')).toBeInTheDocument();
   });
});
