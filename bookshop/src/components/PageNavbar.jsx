import {Navbar, Nav} from "react-bootstrap"
import "../styles/css/pagenav.css"

const PageNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#" active>Home</Nav.Link>
      <Nav.Link href="#">About</Nav.Link>
      <Nav.Link href="#">Browse</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}

export default PageNavbar