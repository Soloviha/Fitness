import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../providers/redux/hooks';
import {
  addParams,
  getAllParametr,
  getMyParameters,
  updateParams,
} from '../../providers/slice/parametr/userParameterThunk';
import styles from '../css/LkPage.module.css';

export default function LkPage(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.userP.userP);
  const userParams = useAppSelector((state) => state.auth.user);

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isEditing] = useState<boolean>(!!userData.id);

  useEffect(() => {
    if (userData.img) {
      setImageFile(null); // Сбрасываем imageFile для обновления
    }
  }, [userData.img]);

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  const submitHandler: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if (imageFile) {
      formData.append('img', imageFile);
    }

    if (isEditing && userData.id !== null) {
      await dispatch(updateParams({ id: userData.id, formData }));
      void dispatch(getMyParameters());
    } else {
      await dispatch(addParams(formData));
      void dispatch(getAllParametr());
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImageFile(event.target.files[0]);
    }
  };

  return (
    <div className={styles.person}>
      <div className={styles.form}>
        <Card className={styles.card}>
          <Card.Body>
            <h2 className={styles.header}>Мои данные</h2>
            <div className={styles.imageUploadContainer}>
              <label htmlFor="imageUpload" className={styles.imageUploadLabel}>
                <div className={styles.imageUploadCircle}>
                  {imageFile ? (
                    <img
                      src={URL.createObjectURL(imageFile)}
                      alt="Uploaded"
                      className={styles.imagePreview}
                    />
                  ) : (
                    userData.img && (
                      <img src={userData.img} alt="User" className={styles.imagePreview} />
                    )
                  )}
                </div>
              </label>
              <input
                id="imageUpload"
                type="file"
                name="img"
                className={styles.imageUploadInput}
                onChange={handleImageUpload}
                accept="image/*" // Ограничиваем выбор только изображениями
              />
            </div>
            <Form onSubmit={submitHandler}>
              <Row>
                <Col xs={12}>
                  <Form.Group controlId="formBasicName" className={styles.formGroup}>
                    <Form.Label>Имя</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      required
                      defaultValue={userParams?.name}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group controlId="formBasicSecondName" className={styles.formGroup}>
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
                  <Form.Group controlId="formBasicEmail" className={styles.formGroup}>
                    <Form.Label>E-Mail</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      required
                      defaultValue={userParams?.email}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group controlId="formBasicDateOfBirth" className={styles.formGroup}>
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
                  <Form.Group controlId="formBasicGender" className={styles.formGroup}>
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
                  <Form.Group controlId="formBasicWeight" className={styles.formGroup}>
                    <Form.Label>Вес (кг)</Form.Label>
                    <Form.Control
                      type="number"
                      name="weight"
                      defaultValue={userData.weight ?? ''}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group controlId="formBasicHeight" className={styles.formGroup}>
                    <Form.Label>Рост (см)</Form.Label>
                    <Form.Control
                      type="number"
                      name="height"
                      defaultValue={userData.height ?? ''}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group controlId="formBasicBMI" className={styles.formGroup}>
                    <Form.Label>BMI</Form.Label>
                    <Form.Control
                      type="number"
                      name="BMI"
                      defaultValue={userData.BMI ?? ''}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Button
                    variant="primary"
                    type="submit"
                    className={`btn-lg w-100 mb-3 ${styles.button}`}
                  >
                    Сохранить
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
