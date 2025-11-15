import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
   const [users, setUsers] = useState([]);

   const loadUsers = async () => {
      const { data: response } = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response);
   };

   useEffect(() => {
      loadUsers();
   }, []);

   return (
      <div data-testid="users-page" className="flex flex-col gap-2">
         {users.map(user => (
            <Link to={`/users/${user.id}`} key={user.id} data-testid="user-item">
               {user.name}
            </Link>
         ))}
      </div>
   );
};

export default Users;
