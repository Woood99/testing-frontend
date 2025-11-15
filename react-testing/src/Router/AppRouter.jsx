import { Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import Users from '../users/Users';
import UserPage from '../UserPage/UserPage';
import Form from '../form/Form';
import Error from '../error/Error';

function AppRouter() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/users" element={<Users />} />
         <Route path="/users/:id" element={<UserPage />} />
         <Route path="/form" element={<Form />} />
         <Route path="*" element={<Error />} />
      </Routes>
   );
}

export default AppRouter;
