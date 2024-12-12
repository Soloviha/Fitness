import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Form, Button, Modal } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../providers/redux/hooks';
import {
  addParams,
  updateParams,
} from '../../providers/slice/parametr/userParameterThunk';
import styles from '../css/LkPage.module.css';

export default function LkPage(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.userP.userP);
  const userParams = useAppSelector((state) => state.auth.user);

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [weight, setWeight] = useState<number>(userData.weight ?? 0);
  const [height, setHeight] = useState<number>(userData.height ?? 0);
  const [bmi, setBmi] = useState<number | null>(null);
  const [isEditing] = useState<boolean>(!!userData.id);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState('Сохранить');


  useEffect(() => {
    if (userData.img) {
      setImageFile(null); // Сбрасываем imageFile для обновления
    }
  }, [userData.img]);

  useEffect(() => {
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100; // Конвертируем рост в метры
      const calculatedBmi = weight / (heightInMeters * heightInMeters);
      setBmi(calculatedBmi);
    } else {
      setBmi(null); // Сбрасываем BMI, если ввод некорректен
    }
  }, [weight, height]);

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  const submitHandler: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if (imageFile) {
        formData.append('img', imageFile);
    }

    try {
        if (isEditing && userData.id !== null) {
            await dispatch(updateParams({ id: userData.id, formData }));
        } else {
            await dispatch(addParams(formData));
        }
        setButtonText('Данные изменены!'); // Изменяем текст кнопки
    } catch (error) {
        console.error('Ошибка при сохранении:', error);
    }
};


  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImageFile(event.target.files[0]);
    }
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleShowModal = () => {
    setShowModal(true);
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleWeightChange = (e): void => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const value = Number(e.target.value);
    if (value <= 200) {
      setWeight(value);
    } else {
      alert("Максимальное значение веса — 200 кг");
    }
  };
  
  const handleHeightChange = (e) : void => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const value = Number(e.target.value);
    if (value <= 200) {
      setHeight(value);
    } else {
      alert("Максимальное значение роста — 200 см");
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
                    <Form.Select name="gender" defaultValue={userData.gender ?? ''} required>
                      <option value="">Выберите пол</option>
                      <option value="male">Мужской</option>
                      <option value="female">Женский</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group controlId="formBasicWeight" className={styles.formGroup}>
                    <Form.Label>Вес (кг)</Form.Label>
                    <Form.Control
                      type="number"
                      name="weight"
                      value={weight || ''}
                      onChange={handleWeightChange}
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
                      value={height || ''}
                      onChange={handleHeightChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group controlId="formBasicBMI" className={styles.formGroup}>
                    <Form.Label>BMI</Form.Label>
                    <div className={styles.bmiContainer}>
                      <Form.Control
                        type="number"
                        name="BMI"
                        value={bmi !== null ? bmi.toFixed(2) : ''}
                        readOnly
                      />
                      <a href="#" onClick={handleShowModal} className={styles.bmiLink}>
                        Подробнее
                      </a>
                    </div>
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Button variant="primary" type="submit" className={styles.button}>
                    {buttonText}
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} className={styles.modal}>
  <div className={styles.modalContent}>
    <Modal.Header closeButton>
      <Modal.Title>Информация о BMI</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Индекс массы тела (BMI) - это показатель, который используется для оценки соотношения веса и роста человека.</p>
      <p>Значения BMI:</p>
      <ul>
        <li>16 и менее - Выраженный дефицит массы тела</li>
        <li>16-18,5 - Недостаточная (дефицит) масса тела</li>
        <li>18,5-25 - Нормальная масса тела</li>
        <li>25-30 - Избыточная масса тела (предожирение)</li>
        <li>30-35 - Ожирение 1 степени</li>
        <li>35-40 - Ожирение 2 степени</li>
        <li>40 и более - Ожирение 3 степени</li>
      </ul>
    </Modal.Body>
  </div>
</Modal>

    </div>
  );
}
