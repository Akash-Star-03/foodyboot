import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

const FoodCard = () => {
    const [modalShow, setModalShow] = React.useState(false); 

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className='text-success'>Ordered is Placed!</h4>
        <p>
          Chicken Biriyani with 3 pcs of chicken and have Onion raita , birinjal gravy and bread halwa.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
  return (
    <>
    <Card className='m-3 '>
    <Card.Img variant="top" src={require('../Assets/biriyani.webp')} />
    <Card.Body>
      <Card.Title>Chicken Biriyani</Card.Title>
      <Card.Text>
      To cater to vegetarians, in some cases, it is prepared by substituting vegetables for the meat. Sometimes eggs and/or potatoes are also added.
      </Card.Text>
      <Button variant="primary" onClick={() => setModalShow(true)}> Order Now</Button>
    </Card.Body>
  </Card>
  <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
  <br></br>
  <Card className='m-3 '>
    <Card.Img variant="top" src={require('../Assets/chickenrice.jpg')} />
    <Card.Body>
      <Card.Title>Chicken Fried Rice</Card.Title>
      <Card.Text>
      To cater to vegetarians, in some cases, it is prepared by substituting vegetables for the meat. Sometimes eggs and/or potatoes are also added.
      </Card.Text>
      <Button variant="primary" onClick={() => setModalShow(true)}>Order Now</Button>
    </Card.Body>
  </Card>
  <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
  <br></br>
  <Card className='m-3 '>
    <Card.Img variant="top" src={require('../Assets/parota.avif')} />
    <Card.Body>
      <Card.Title>Parota</Card.Title>
      <Card.Text>
      To cater to vegetarians, in some cases, it is prepared by substituting vegetables for the meat. Sometimes eggs and/or potatoes are also added.
      </Card.Text>
      <Button variant="primary" onClick={() => setModalShow(true)}>Order Now</Button>
    </Card.Body>
  </Card>
  <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
  </>
  )
}

export default FoodCard