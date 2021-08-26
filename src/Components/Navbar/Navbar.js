import React from 'react';
import {Container,Nav,Navbar} from 'react-bootstrap'

const Navb = () => {
    return (
        <div>
            
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">My Shop</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Items</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>

      
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>

        </div>
    )
}


export default Navb;