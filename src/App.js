import "./App.css";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// img


function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Simple Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Notice</Nav.Link>

            <NavDropdown title="Product" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Necklace</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Earing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bracelet</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <section className="main-bg">
    </section>

    <section className="container">
      <div className="row">
        <div className="col-md-4">
          <img src={process.env.PUBLIC_URL + "/imgs/necklace.webp"} width={"100%"}/>
          <h5>NECKLACE</h5>
        </div>
        <div className="col-md-4">
          <img src={process.env.PUBLIC_URL + "/imgs/earing.webp"} width={"100%"}/>
          <h5>EARING</h5>
        </div>
        <div className="col-md-4">
          <img src={process.env.PUBLIC_URL + "/imgs/bracelet.webp"} width={"100%"}/>
          <h5>BRACELET</h5>
        </div>
      </div>
    </section>

    </div>
  );
}

export default App;
