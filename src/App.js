import "./App.css";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import React, { useState } from "react";

import data from "./components/Data";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

// Context
export const DataStateContext = React.createContext();

function App() {
  const [products, setProducts] = useState(data);

  return (
    <DataStateContext.Provider value={products}>
      <BrowserRouter>
        <div className="App">
          <Navbar collapseOnSelect expand="lg">
            <Container>
              <Link to="/">
                  <Navbar.Brand href="#home">BYCHARI</Navbar.Brand>
              </Link>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#features">About</Nav.Link>
                  <Nav.Link href="#pricing">Notice</Nav.Link>

                  <NavDropdown title="Product" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Necklace
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Earing
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Bracelet
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<Detail />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </DataStateContext.Provider>
  );
}

export default App;
