import React, { useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../providers/redux/hooks';
import { signupThunk } from '../../providers/slice/auth/authThunks';
import { setModalClose } from '../../providers/slice/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import styles from '../../components/css/SIgnupModal.module.css';

export default function SignupModal(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, accessToken, isSignupModalOpen } = useAppSelector((state) => state.auth);

  const handleClose = (): void => {
    void dispatch(setModalClose());
  };

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  const submitHandler: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await dispatch(signupThunk(new FormData(e.currentTarget)));
  };

  useEffect(() => {
    if (user && accessToken) {
      handleClose();
      navigate('/');
    }
  }, [user, accessToken, navigate]);

  return (
    <Modal show={isSignupModalOpen} onHide={handleClose}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <Modal.Header closeButton>
            <Modal.Title className="text-light" style={{ fontSize: '16px' }}>Регистрация</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={submitHandler}>
              <Form.Group className={`${styles.mb_3} ${styles.formGroup}`} controlId="formBasicName">
                <Form.Label className="text-light" style={{ fontSize: '16px' }}>Имя</Form.Label>
                <Form.Control type="text" name="name" placeholder="Введите ваше имя" required />
              </Form.Group>

              <Form.Group className={`${styles.mb_3} ${styles.formGroup}`} controlId="formBasicEmail">
                <Form.Label className="text-light" style={{ fontSize: '16px' }}>Почта</Form.Label>
                <Form.Control type="email" name="email" placeholder="Введите почту" required />
              </Form.Group>

              <Form.Group className={`${styles.mb_3} ${styles.formGroup}`} controlId="formBasicPassword">
                <Form.Label className="text-light" style={{ fontSize: '16px' }}>Пароль</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Введите пароль"
                  required
                />
              </Form.Group>
              <Button type="submit" className={`btn-lg w-100 mb-3 ${styles.button}`}>
                Зарегистрироваться
              </Button>
            </Form>
          </Modal.Body>
        </div>
      </div>
    </Modal>
  );
}
