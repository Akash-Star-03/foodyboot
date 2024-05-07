import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FoodCard from './FoodCard'

const Menu = () => {
     const [menu]=useState([1,2,3])
  return (
    <section id='menu' className='bg-light'>
        <Container>
            <div className='text-center'>
            <h3 className='text-danger my-3 py-5'>Fill your Belly up! guyzz <i class="bi bi-balloon-heart"></i></h3>
            </div>
            <Row>
                {
                    menu.map((item)=>{
            return(
                <Col md={6} lg={4} key={item}>
                <FoodCard/>
                </Col>)
                    })
                }
            </Row>
        </Container>
    </section>
  )
}

export default Menu