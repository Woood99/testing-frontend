import { screen } from '@testing-library/react';
import Navbar from './Navbar';
import { renderWithRouter } from '../tests/helpers/renderWithRouter';
import userEvent from '@testing-library/user-event';

describe('users test', () => {
   test('renders learn react link', () => {
      renderWithRouter(<Navbar />);
      const usersLink = screen.getByTestId('users-page-link');
      userEvent.click(usersLink);
      expect(screen.getByTestId('users-page')).toBeInTheDocument();
   });
   test('renders learn react link', () => {
      renderWithRouter(<Navbar />);
      const formLink = screen.getByTestId('form-page-link');
      userEvent.click(formLink);
      expect(screen.getByTestId('form-page')).toBeInTheDocument();
   });
   test('renders learn react link', () => {
      renderWithRouter(<Navbar />);
      const homeLink = screen.getByTestId('home-page-link');
      userEvent.click(homeLink);
      expect(screen.getByTestId('home-page')).toBeInTheDocument();
   });
});
