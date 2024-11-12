import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='container-fluid py-5  px-5  bg-light'>
    <Row>

<Col md={6} sm={12}>
<h3> Contact Management</h3>
<p style={{textAlign:'justify'}}>Contact management is the process of recording and tracking information about customers and other contacts, and the interactions with them.</p>

</Col>

<Col md={2} sm={12}>
<h3>Links</h3>
<div className='d-flex ' style={{flexDirection:'column'}}>
    <Link to={'/'} className='mb-2 text-dark' >Landing</Link>
    <Link to={'/home'} className='mb-2 text-dark ' >Home</Link>

</div>
</Col>

<Col md={4} sm={12} >
            <div className='w-75'>
              <h3 className='mb-2'>Feedback</h3>
              <textarea name="" id="" className='form-control mb-2' placeholder='Add Your Feedback'></textarea>
              <button className='btn btn-success'>Send</button>
            </div>
          </Col>


    </Row>
    
    </div>

    
    </>
  )
}

export default Footer
