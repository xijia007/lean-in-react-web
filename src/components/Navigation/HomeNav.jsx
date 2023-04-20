import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginComponent from './LoginComponent';
import * as ROUTES from '../../constants/routes';

function HomeNav() {
  const { user, isLogined } = useSelector((state) => state.userInfo);
  const { firstName, role } = user;
  const isAdmin = role === 'admin';
  return (
    <Navbar>
      <Container fluid>
        <Navbar.Brand href="/">LeanIn</Navbar.Brand>
        <Nav className="ml-auto">
          {isLogined ? (
            <LinkContainer to={ROUTES.PROFILE}>
              <Nav.Link>Hello, {firstName}</Nav.Link>
            </LinkContainer>
          ) : (
            <LinkContainer to={ROUTES.SIGN_IN}>
              <Nav.Link>Sign In</Nav.Link>
            </LinkContainer>
          )}
          <LinkContainer to={ROUTES.HOME}>
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to={ROUTES.SEARCH}>
            <Nav.Link>Search</Nav.Link>
          </LinkContainer>
          <LinkContainer to={ROUTES.PROFILE}>
            <Nav.Link>Profile</Nav.Link>
          </LinkContainer>

          {isAdmin && (
            <LinkContainer to={ROUTES.ADMIN}>
              <Nav.Link>Admin</Nav.Link>
            </LinkContainer>
          )}

          <LoginComponent />
        </Nav>
      </Container>
    </Navbar>
  );
}

export default HomeNav;
