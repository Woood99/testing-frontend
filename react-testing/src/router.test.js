import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('router', () => {
   test('router test', () => {
      render(
         <MemoryRouter>
            <App />
         </MemoryRouter>
      );
      const homeLink = screen.getByTestId('home-page-link');
      const usersLink = screen.getByTestId('users-page-link');
      userEvent.click(usersLink);
      expect(screen.getByTestId('users-page')).toBeInTheDocument();
      userEvent.click(homeLink);
      expect(screen.getByTestId('home-page')).toBeInTheDocument();
   });

   test('error page test', () => {
      render(
         <MemoryRouter initialEntries={['/fasfasfas241421412']}>
            <App />
         </MemoryRouter>
      );
      expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
   });
});
