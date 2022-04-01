import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Acty List
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Dashboard
            </Nav.Link>
            <Nav.Link as={NavLink} to="/client/list">
              Clients
            </Nav.Link>
            <Nav.Link as={NavLink} to="/activity/list">
              Activities
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown
              align="end"
              title="Bruno Eduardo"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Exit</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
