import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useAppDispatch } from '../../providers/redux/hooks';
import { loginThunk } from '../../providers/slice/auth/authThunks';


export default function LoginPage(): React.JSX.Element {
  const dispatch = useAppDispatch();

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    void dispatch(loginThunk(new FormData(e.currentTarget)));
  };

  return (
    <Container>
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Почта</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Войти
      </Button>
    </Form>
    </Container>
  );
}
