import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithRouter } from './tests/helpers/renderWithRouter';

describe('router', () => {
   test('router test', () => {
      renderWithRouter();
      const homeLink = screen.getByTestId('home-page-link');
      const usersLink = screen.getByTestId('users-page-link');
      userEvent.click(usersLink);
      expect(screen.getByTestId('users-page')).toBeInTheDocument();
      userEvent.click(homeLink);
      expect(screen.getByTestId('home-page')).toBeInTheDocument();
   });

   test('error page test', () => {
      renderWithRouter('/fasfasfas241421412');
      expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
   });
});
