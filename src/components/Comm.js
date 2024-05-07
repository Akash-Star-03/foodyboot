import React from 'react'
import { Col, Container, FloatingLabel, Form, InputGroup, Row } from 'react-bootstrap'

const Comm = () => {
  return (
    <section id='contact' className='bg-light py-3'>
<div className='text-center my-2 py-3'>
        <h4 className='display-6 text-danger'>Contact us  <i class="bi bi-chat-dots-fill"></i></h4>
       </div>
    <Container>
        <Row className='justify-content-center'>
            <Col md={6}>
            <Form>
            <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i class="bi bi-envelope-at"></i></InputGroup.Text>
        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      </InputGroup>
      
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i class="bi bi-person-fill"></i></InputGroup.Text>
        <FloatingLabel
        controlId="floatingInput"
        label="Your Name"
        
      >
        <Form.Control type="text" placeholder="Your Name" />
      </FloatingLabel>
      </InputGroup>
      <FloatingLabel
        controlId="floatingInput"
        label="Comments"
        
      >
        <Form.Control type="text" placeholder="Comments" />
      </FloatingLabel>
            </Form>
            </Col>
        </Row>
    </Container>
    </section>
  )
}

export default Comm