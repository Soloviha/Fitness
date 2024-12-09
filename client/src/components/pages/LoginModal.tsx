import React, { useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../providers/redux/hooks';
import { loginThunk } from '../../providers/slice/auth/authThunks';
import { setModalClose, setSignupModalOpen } from '../../providers/slice/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import styles from '../../components/css/LoginModal.module.css';

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
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <Modal.Header closeButton>
            <Modal.Title className="text-light" style={{ fontSize: '16px' }}>Вход</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={submitHandler}>
              <Form.Group className={`${styles.mb_3} ${styles.formGroup}`} controlId="formBasicEmail">
                <Form.Label className="text-light" style={{ fontSize: '16px' }}>Почта</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" required />
              </Form.Group>

              <Form.Group className={`${styles.mb_3} ${styles.formGroup}`} controlId="formBasicPassword">
                <Form.Label className="text-light" style={{ fontSize: '16px' }}>Пароль</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" required />
              </Form.Group>

              <Button type="submit" className={`btn-lg w-100 mb-3 ${styles.button}`}>
                Войти
              </Button>
              <div className="d-flex justify-content-center">
                <Button variant="link" onClick={openSignupModal} className={styles.signupButton}>
                  Регистрация
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </div>
      </div>
    </Modal>
  );
}
