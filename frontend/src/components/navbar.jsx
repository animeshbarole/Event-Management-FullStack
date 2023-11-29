import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';


const NavbarComp= ()=> {
  return (
    <Navbar  bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Event Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as ={Link} to = {"/"}>Home</Nav.Link>
            <Nav.Link as ={Link} to = {"/yourEvents"}>Your Events</Nav.Link>
            <Nav.Link as ={Link} to = {"/upcomingEvents"}>Upcoming Events</Nav.Link>
            <Nav.Link as ={Link} to = {"/login"}>Login</Nav.Link>
          
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;