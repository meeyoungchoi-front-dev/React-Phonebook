import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from "react-redux";

const SearchBox = () => {
  let [keyword, setKeyword] = useState('');
  let dispatch = useDispatch();

  const searchByName = (event) => {
    event.preventDefault();
    // 검색어를 디스패치하여 Redux 상태를 업데이트
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } });
  };

  return (
    <Form onSubmit={searchByName}>
      <Row>
        <Col lg={10}>
          <Form.Control 
            type="text" 
            placeholder="이름을 입력해주세요" 
            value={keyword} 
            onChange={(e) => setKeyword(e.target.value)}  // 입력된 값을 상태로 업데이트
          />
        </Col>
        <Col lg={2}>
          <Button type="submit">찾기</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default SearchBox;
