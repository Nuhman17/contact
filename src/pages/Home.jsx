import React from 'react'
import Add from '../components/Add'
import Contacts from '../components/Contacts'
import { Row,Col } from 'react-bootstrap'

function Home() {
  return (
   <>
   <div className='container-fluid'>
    <Row>
      <Col sm={12} md={2} >
      <Add />
      
      </Col>
      <Col sm={12} md={10}  >
      <Contacts/> 
      </Col>


    </Row>


   </div>
   
   
   
   </>
  )
}

export default Home
