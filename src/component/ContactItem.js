import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ContactItem = ({item}) => {
  return (
   <Row>
        <Col lg={1}>
            <img width={50} src="https://th.bing.com/th/id/OIP.BoqJ8tKGpWzJm8UbfGVbOwHaHa?w=211&h=212&c=7&r=0&o=5&pid=1.7" alt="user-image"/>
        </Col>
        <Col lg={11}>
           <div>{item.name}</div>
           <div>{item.phoneNumber}</div>
        </Col>
   </Row>
  )
}

export default ContactItem
