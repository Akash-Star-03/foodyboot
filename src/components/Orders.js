import React from 'react'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';


const Orders = () => {
  return (
    <ListGroup as="ol" numbered>
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">Chicken Biryani</div>
        $7.13 with GST applicable
      </div>
      <Badge bg="primary" pill>
        3
      </Badge>
    </ListGroup.Item>
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">Fried Rice</div>
        $6.03 with GST applicable
      </div>
      <Badge bg="primary" pill>
        6
      </Badge>
    </ListGroup.Item>
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">Kili Parota</div>
        $4.00 with GST applicable
      </div>
      <Badge bg="primary" pill>
        2
      </Badge>
    </ListGroup.Item>
  </ListGroup>
  )
}

export default Orders