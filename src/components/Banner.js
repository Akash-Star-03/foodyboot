import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Col, Container, Row } from 'react-bootstrap'

const Banner = () => {
  return (
    <section id='home'>
    <Container fluid>
        <Row className='justify-content-center align-items-center'>
            <Col lg={6}>
            <Carousel>
      <Carousel.Item interval={3000}>
        <img className='d-block w-100' src={require('../Assets/biriyani.webp')} alt='Biriyani'/>
        <Carousel.Caption>
          <h3 className='fw-bold text-black'>Biriyani</h3>
          <p className='d-none d-md-block text-black'>The Biriyani is south style well spicy chicken biriyani .</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className='d-block w-100' src={require('../Assets/chickenrice.jpg')} alt='Fried rice'/>
        <Carousel.Caption>
          <h3 className='fw-bold text-black'>Chicken Fried Rice</h3>
          <p className='d-none d-md-block  text-black'> The Chicken fried rice is done by chinese chefs and have some rare toppings.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className='d-block w-100' src={require('../Assets/parota.avif')} alt='Parota'/>
        <Carousel.Caption>
          <h3 className='fw-bold'>Parota with Gravy</h3>
          <p className='d-none d-md-block text-light'>
            The Soft parota with chicken,mutton and egg gravy will be packed!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </Col>
        </Row>
        <div className='text-center'>
      <h3 className='display-6' mt-3 > Try some South Indian Cuisines!</h3>
      <p className='text-muted lead'> Chettinadu , Continental , Malabar spicy and flavourful foods.</p>
     </div>
    </Container>
    </section>
  )
}

export default Banner