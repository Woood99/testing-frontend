import { Link } from 'react-router-dom';

const Navbar = () => {
   return (
      <div className="flex gap-2">
         <Link to="/" data-testid="home-page-link">
            Home
         </Link>
         <Link to="/users" data-testid="users-page-link">
            Users
         </Link>
         <Link to="/form" data-testid="form-page-link">
            Form
         </Link>
      </div>
   );
};

export default Navbar;
