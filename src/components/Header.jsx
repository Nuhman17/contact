import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
   <>

<Navbar className="bg-light ">
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-solid fa-address-card fa-xl m-2 " style={{color:'blueviolet'}} />     
                {'   '}
           Contact Management
          </Navbar.Brand>
        </Container>
      </Navbar>
   
   
   
   </>
  )
}

export default Header
