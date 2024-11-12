import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
    <div className='container-fluid d-flex jusyify-content-center align-items-center bg-info' style={{height:'75vh'}}>
        <Row className='p-4'>
      <Col className='d-flex justify-content-center flex-column'>
      <h3>Contact Management</h3>
      <p className='mt-3' style={{textAlign:'justify'}}>Contact management is the process of recording and tracking information about customers and other contacts, and the interactions with them.
      </p>
      <div className='text-center '>
      <Link to={'/home'} className='btn btn-success form-control'>
      <i className="fa-solid fa-arrow-right-long fa-xl" style={{color: "#ffffff",}} />
     </Link>
     </div>



      </Col>

      <Col>
      <img src="https://cdn.prod.website-files.com/5b7f24cc900973de13d7beb4/66049897055ee5822308b358_best%20contact%20management%20software%201.png" alt=""
      className='img-fluid rounded' />
      
      </Col>


    </Row>
    
     </div>
    
    </>
  )
}

export default Landing
