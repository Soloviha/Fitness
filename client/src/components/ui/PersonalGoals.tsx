import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import React from 'react';
import styles from '../../components/css/PersonalPage.module.css';

const PersonalGoals = () => (
  <Container className={styles.PersonalGoals}>
    <h1 className={styles.h1}>Цели тренировок</h1>
    <Form>
      <Row className={styles.mb_3}>
        <Col className={styles.col}>
          <Form.Group controlId="formWeightGoal">
            <Form.Label>Целевой вес (кг)</Form.Label>
            <Form.Control type="number" placeholder="Введите целевой вес" />
          </Form.Group>
        </Col>
        <Col className={styles.col}>
          <Form.Group controlId="formBodyQualityGoal">
            <Form.Label>Целевой коэффициент массы тела</Form.Label>
            <Form.Control type="number" placeholder="Введите коэффициент" />
          </Form.Group>
        </Col>
      </Row>

      <h5>Целевые параметры тела</h5>
      <Row className={styles.mb_3}>
        <Col className={styles.col}>
          <Form.Group controlId="formWaistGoal">
            <Form.Label>Объем талии (см)</Form.Label>
            <Form.Control type="number" placeholder="Введите целевой объем талии" />
          </Form.Group>
        </Col>
        <Col className={styles.col}>
          <Form.Group controlId="formChestGoal">
            <Form.Label>Объем груди (см)</Form.Label>
            <Form.Control type="number" placeholder="Введите целевой объем груди" />
          </Form.Group>
        </Col>
        <Col className={styles.col}>
          <Form.Group controlId="formHipGoal">
            <Form.Label>Объем бедер (см)</Form.Label>
            <Form.Control type="number" placeholder="Введите целевой объем бедер" />
          </Form.Group>
        </Col>
      </Row>

      <h5>Улучшение самочувствия</h5>
      <Row className={styles.mb_3}>
        <Col className={styles.col}>
          <Form.Group controlId="formWellnessEnergy">
            <Form.Label>Бодрость</Form.Label>
            <Form.Control type="range" min="1" max="10" />
          </Form.Group>
        </Col>
        <Col className={styles.col}>
          <Form.Group controlId="formWellnessFlexibility">
            <Form.Label>Гибкость</Form.Label>
            <Form.Control type="range" min="1" max="10" />
          </Form.Group>
        </Col>
        <Col className={styles.col}>
          <Form.Group controlId="formWellnessEndurance">
            <Form.Label>Выносливость</Form.Label>
            <Form.Control type="range" min="1" max="10" />
          </Form.Group>
        </Col>
      </Row>

      <Button variant="primary" type="submit">
        Установить цели
      </Button>
    </Form>
  </Container>
);

export default PersonalGoals;
