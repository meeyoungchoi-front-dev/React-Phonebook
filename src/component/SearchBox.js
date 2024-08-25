import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBox = () => {
  return (
    <Row >
        <Col lg={10}>
            <Form.Control type="text" placeholder="이름을 입력해주세요" />
            
        </Col>
        <Col lg={2}>
            <Button>찾기</Button>
        </Col>
    </Row>
  )
}

export default SearchBox
