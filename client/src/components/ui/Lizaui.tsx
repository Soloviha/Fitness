import React from 'react';

import { Card, Col, Row, Form, Button} from 'react-bootstrap';

import { useAppDispatch, useAppSelector } from '../../providers/redux/hooks';
import { addParams } from '../../providers/slice/parametr/userParameterThunk';

export default function TestPage(): React.JSX.Element {

  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.userP.userP);

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    void dispatch(addParams(formData));
  };

  console.log({ userData });

  return (
    <Card className="mb-4" style={{ maxWidth: '400px', margin: 'auto' }}>
      {userData.img && <img src={userData.img} alt="" width="400px" height={400} />}
      <Card.Body>
        <Form onSubmit={submitHandler}>
          <Row>
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>1</Form.Label>
                <Form.Control type="file" name="img" placeholder="" required />
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>2</Form.Label>
                <Form.Control type="text" name="gender" placeholder="" required />
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>3</Form.Label>
                <Form.Control type="number" name="weight" placeholder="" required />
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>4</Form.Label>
                <Form.Control type="number" name="height" placeholder="" required />
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>5</Form.Label>
                <Form.Control type="text" name="dateOfBirth" placeholder="" required />
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>6</Form.Label>
                <Form.Control type="number" name="BMI" placeholder="" required />
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>8</Form.Label>
                <Form.Control type="text" name="secondName" placeholder="" required />
              </Form.Group>
            </Col>
            <Button variant="primary" type="submit" className="w-75">
              Добавить
            </Button>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
}
