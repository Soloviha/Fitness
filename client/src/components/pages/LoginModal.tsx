import React, { useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../providers/redux/hooks';
import { loginThunk } from '../../providers/slice/auth/authThunks';
import { setModalClose, setSignupModalOpen } from '../../providers/slice/auth/authSlice';
import { useNavigate } from 'react-router-dom';


export default function LoginModal(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, accessToken, isModalOpen } = useAppSelector((state) => state.auth);

  const handleClose = (): void => {
    void dispatch(setModalClose());
  };

  const openSignupModal = (): void => {
    handleClose();
    void dispatch(setSignupModalOpen());
  };

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  const submitHandler: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await dispatch(loginThunk(new FormData(e.currentTarget)));
  };

  useEffect(() => {
    if (user && accessToken) {
      handleClose();
      navigate('/');
    }
  }, [user, accessToken, navigate]);

  return (
    <Modal show={isModalOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Вход</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Почта</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" required />
          </Form.Group>
          <Button variant="primary" type="submit">
            Войти
          </Button>
          <Button variant="link" onClick={openSignupModal}>
          Регистрация
          </Button>
        </Form>
      </Modal.Body>
     
    </Modal>
    
  );
}
