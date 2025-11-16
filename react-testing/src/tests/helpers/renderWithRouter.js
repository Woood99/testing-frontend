import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../../store/store';
import App from '../../App';

export const renderWithRouter = (initialRoute = '/', reduxStore = {}) => {
   return render(
      <Provider store={createReduxStore(reduxStore)}>
         <MemoryRouter initialEntries={[initialRoute]}>
            <App />
         </MemoryRouter>
      </Provider>
   );
};
