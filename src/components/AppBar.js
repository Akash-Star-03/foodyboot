import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Kart from './Kart';

const AppBar = () => {
  return (
    <div> <Navbar expand="lg" className="bg-body-tertiary " id='naav'>
    <Container >
      <Navbar.Brand href="#home"><h2 className='text-success .ubuntu-regular fw-bold'><span ><i class="bi bi-fire text-warning"></i>Ash! kitchen!</span></h2> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
        <Nav >
          <Nav.Link href="#home" className='fw-bold'>Home</Nav.Link>
          <Nav.Link href='#menu' className='fw-bold'>Menu</Nav.Link>
          <Nav.Link href="#fillpicker" className='fw-bold'>Delicious one</Nav.Link>
          <Nav.Link href="#contact" className='fw-bold'>Contact</Nav.Link>
         <Kart/>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default AppBar