import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import * as ROUTES from '../../constants/routes';

function HomeNav() {
  const { user } = useSelector((state) => state.userInfo);
  const { firstName, role, isLogined } = user;
  const isAdmin = role === 'admin';
  const isUser = role === 'user';
  const isCompany = role === 'company';

  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Container fluid>
        <Navbar.Brand href="#"><img className="logo_size" src="./images/logo-transparent-png.png"/></Navbar.Brand>
        <Nav className="ml-auto">
          {isLogined ? (
            <LinkContainer to={ROUTES.USERHOME}>
              <Nav.Link>Hello, {firstName}</Nav.Link>
            </LinkContainer>
          ) : (
            <LinkContainer to={ROUTES.SIGN_IN}>
              <Nav.Link>Sign In</Nav.Link>
            </LinkContainer>
          )}
          {isUser && (
            <LinkContainer to={ROUTES.USERHOME}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
          )}

          {isAdmin && (
            <LinkContainer to={ROUTES.ADMINHOME}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
          )}

          {isCompany && (
            <LinkContainer to={ROUTES.COMPANYHOME}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
          )}
          {/* 
          {isCompany && (
            <LinkContainer to={ROUTES.JOBS}>
              <Nav.Link>Jobs</Nav.Link>
            </LinkContainer>
          )} */}

          {isCompany && (
            <LinkContainer to={ROUTES.COMPANY_PROFILE}>
              <Nav.Link>Company Profile</Nav.Link>
            </LinkContainer>
          )}

          {isUser && (
            <LinkContainer to={ROUTES.SEARCH}>
              <Nav.Link>Search</Nav.Link>
            </LinkContainer>
          )}

          {isUser && isLogined && (
            <LinkContainer to={ROUTES.PROFILE}>
              <Nav.Link>Profile</Nav.Link>
            </LinkContainer>
          )}

          {/* {isAdmin && (
            <LinkContainer to={ROUTES.ADMIN}>
              <Nav.Link>Users Management</Nav.Link>
            </LinkContainer>
          )} */}
          {isLogined && (
            <LinkContainer to={ROUTES.SIGN_OUT}>
              <Nav.Link>Sign Out</Nav.Link>
            </LinkContainer>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default HomeNav;
