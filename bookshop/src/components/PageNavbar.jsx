import {Navbar, Nav} from "react-bootstrap"
import "../styles/css/pagenav.css"
import {Link} from 'react-router-dom'


const PageNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
  <Navbar.Brand href="#home"><ion-icon name="book-outline"></ion-icon></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link active><Link to="/Welcome">Home</Link></Nav.Link>
      <Nav.Link><Link to="/LatestReleases">Latest Releases</Link></Nav.Link>
      <Nav.Link>About</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}

export default PageNavbar