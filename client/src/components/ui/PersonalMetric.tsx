import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Container, Form } from 'react-bootstrap';
import styles from '../../components/css/PersonalPage.module.css';

export default function PersonalMetric(): React.JSX.Element {
  return (
    <Container className={styles.PersonalMetric}>
      <Form>
        {/* onSubmit={submitHandler} */}
        <Form.Group className={styles.mb_3} controlId="formBasicWeight">
          <Form.Label>Вес (кг)</Form.Label>
          <Form.Control
            type="number"
            name="weight"
            placeholder="Введите вес"
            defaultValue="55"
            required
          />
        </Form.Group>

        <Form.Group className={styles.mb_3} controlId="formBasicWaistCircumference">
          <Form.Label>Объем талии (см)</Form.Label>
          <Form.Control
            type="number"
            name="waistCircumference"
            placeholder="Введите объем талии"
            defaultValue="80"
            required
          />
        </Form.Group>

        <Form.Group className={styles.mb_3} controlId="formBasicChestCircumference">
          <Form.Label>Объем груди (см)</Form.Label>
          <Form.Control
            type="number"
            name="chestCircumference"
            placeholder="Введите объем груди"
            defaultValue="90"
            required
          />
        </Form.Group>

        <Form.Group className={styles.mb_3} controlId="formBasicHipCircumference">
          <Form.Label>Объем бедер (см)</Form.Label>
          <Form.Control
            type="number"
            name="hipCircumference"
            placeholder="Введите объем бедер"
            defaultValue="95"
            required
          />
        </Form.Group>

        <Form.Group className={styles.mb_3} controlId="formBasicThighCircumference">
          <Form.Label>Объем бедра (см)</Form.Label>
          <Form.Control
            type="number"
            name="thighCircumference"
            placeholder="Введите объем бедра"
            defaultValue="55"
            required
          />
        </Form.Group>

        <Form.Group className={styles.mb_3} controlId="formBasicShoulderCircumference">
          <Form.Label>Объем плеча (см)</Form.Label>
          <Form.Control
            type="number"
            name="shoulderCircumference"
            placeholder="Введите объем плеча"
            defaultValue="40"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Сохранить
        </Button>
        <Button variant="secondary" className="ms-2">
          Редактировать
        </Button>
      </Form>
    </Container>
  );
}
