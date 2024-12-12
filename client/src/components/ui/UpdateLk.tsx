import React from 'react';
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../providers/redux/hooks';
import {  updateParams } from '../../providers/slice/parametr/userParameterThunk';

import type { DescCardType } from '../../schemas/descCard.schema';

type DescCardProps = {
  descCard: DescCardType;
};

export default function UpdateLk({ descCard }: DescCardProps): React.JSX.Element {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.userP.userP);
  const userParams = useAppSelector((state) => state.auth.user);

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  const submitHandler: React.FormEventHandler<HTMLFormElement> = async (e): Promise<void> => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!descCard) return;
    const formData = new FormData(e.currentTarget);
    await dispatch(updateParams({ id: descCard.id, formData }));
  };

  return (
    <Card >
      <Card.Body>
        <Form onSubmit={submitHandler}>
          <Row>
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Имя</Form.Label>
                <Form.Control type="text" name="name" required defaultValue={userParams?.name} />
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="formBasicSecondName">
                <Form.Label>Фамилия</Form.Label>
                <Form.Control
                  type="text"
                  name="secondName"
                  defaultValue={userData.secondName ?? ''}
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>E-Mail</Form.Label>
                <Form.Control type="email" name="email" required defaultValue={userParams?.email} />
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="formBasicDateOfBirth">
                <Form.Label>Дата рождения</Form.Label>
                <Form.Control
                  type="date"
                  name="dateOfBirth"
                  defaultValue={userData.dateOfBirth ?? ''}
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="formBasicGender">
                <Form.Label>Пол</Form.Label>
                <Form.Control
                  type="text"
                  name="gender"
                  defaultValue={userData.gender ?? ''}
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="formBasicWeight">
                <Form.Label>Вес</Form.Label>
                <Form.Control
                  type="number"
                  name="weight"
                  defaultValue={userData.weight ?? ''}
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="formBasicHeight">
                <Form.Label>Рост</Form.Label>
                <Form.Control
                  type="number"
                  name="height"
                  defaultValue={userData.height ?? ''}
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="formBasicBMI">
                <Form.Label>BMI</Form.Label>
                <Form.Control type="number" name="BMI" defaultValue={userData.BMI ?? ''} required />
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Button
                variant="primary"
                type="submit"
                className={`btn-lg w-100 mb-3`}
              >
                Сохранить
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
}
