import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginComponent from './LoginComponent';

function HomeNav() {
  return (
    <Navbar>
      <Container fluid>
        <Navbar.Brand href="/">LeanIn</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/search">Search</Nav.Link>
          <Nav.Link href="/Profile">Profile</Nav.Link>
          <LoginComponent />
        </Nav>
      </Container>
    </Navbar>
  );
}

export default HomeNav;
