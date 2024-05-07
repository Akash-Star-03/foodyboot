import React,{useState} from 'react'
import { Button, Col } from 'react-bootstrap'
import { Container, Row ,Image} from 'react-bootstrap'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';



const Picker = () => {
    const [show,setShow] = useState(false);
  return (
    <section id='fillpicker' className='my-3'> 
       <div className='text-center my-2 py-3'>
        <h2 className='display-5 text-danger'><i class="bi bi-house-heart-fill"></i>Favoutite seller of Week!</h2>
       </div>
       <Container>
        <Row className='align-items-center my-3'>
            <Col md={7} >
          <Image src={require('../Assets/bb.jpg')} fluid alt='Bamboo-Biriyani' rounded></Image>
            </Col>
            <Col md={5}>
                <div className='py-3'>
                    <h2 className='text-center h1'> Bamboo-Biriyani  </h2>
                    <p className='lead text-muted'>He says, “Rice and meat (either chicken or mutton) are marinated in light spices and packed into a tube of bamboo to lend the biryani a steamy makeover. What you get is a really aromatic biryani which leaves an enduring taste on your taste buds.” </p>
                    <Button variant='danger'onClick={()=>setShow(true)}><i class="bi bi-cart4"></i> Buy now</Button>
                </div>
            </Col>
        </Row>
        <ToastContainer
          className="p-3 position-fixed top-0 end-0"
          position={'top-end'}
          style={{ zIndex: 1 }}
        >
          <Toast onClose={()=>setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Biriyani Added</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Your order has been placed!.</Toast.Body>
          </Toast>
        </ToastContainer>
       </Container>
    </section>
  )
}

export default Picker