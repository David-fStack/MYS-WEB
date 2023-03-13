import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function CollapsibleExample(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">M<span className='text-danger'>&</span>S</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="#Form">Contacto</Nav.Link>



            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
            <NavDropdown title="Servicios" id="collasible-nav-dropdown">
              {/* <NavDropdown.Item href="#infoVyS">Ventas y Alquileres</NavDropdown.Item> */}
              <NavDropdown.Item href="Equipos">
                Equipos
              </NavDropdown.Item>
              <NavDropdown.Item href="#/"></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Services">
                Sobre Nosotros
              </NavDropdown.Item>
            </NavDropdown>