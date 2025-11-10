import { render, screen } from '@testing-library/react';
import Users from './Users';
import axios from 'axios';

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

   test('renders', async () => {
      axios.get.mockResolvedValue(response);
      render(<Users />);
      const users = await screen.findAllByTestId('user-item');
      expect(users.length).toBe(3);
      expect(axios.get).toHaveBeenCalledTimes(1);
      screen.debug();
   });
});
