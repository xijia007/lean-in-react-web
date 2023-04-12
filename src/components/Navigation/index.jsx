import { Link } from 'react-router-dom';
// import { Navbar, Container, Nav, NavLink } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import * as ROUTES from '../../constants/routes';

function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.SEARCH}>Search</Link>
        </li>
        <li>
          <Link to={ROUTES.SEARCHDETAILS}>Search Details</Link>
        </li>
        <li>
          <Link to={ROUTES.PROFILE}>Profile</Link>
        </li>
        <li>
          <Link to={`${ROUTES.PROFILE}${ROUTES.EDITPROFILE}`}>Edit Profile</Link>
        </li>

        <li>
          <Link to={ROUTES.ADMIN}>Admin</Link>
        </li>
        <li>
          <Link to={ROUTES.SIGN_IN}>Login/Logout</Link>
        </li>
        <li>
          <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
