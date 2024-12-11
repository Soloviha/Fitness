import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../css/FootBar.module.css'

export default function FootBar(): React.JSX.Element{
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <Row className={styles.row}>
          <Col md={3}>
            <h6 className={styles.h6}>О приложении</h6>
            <ul className="list-unstyled">
              <li>JOJO_fit</li>
              <li>Личный тренер для тебя</li>
            </ul>
          </Col>
          <Col md={2}>
            <h6 className={styles.h6}>Екатерина Соловьева</h6>
            <ul className="list-unstyled">
              <li>@Katy_Solovey</li>
            </ul>
          </Col>
          <Col md={2}>
            <h6 className={styles.h6}>Андрей Миронов</h6>
            <ul className="list-unstyled">
              <li>@andrey_mir0n0v</li>
            </ul>
          </Col>
          <Col md={2}>
            <h6 className={styles.h6}>Павел Гайков</h6>
            <ul className="list-unstyled">
              <li>@boorshhzxc</li>
            </ul>
          </Col>
          <Col md={2}>
            <h6 className={styles.h6}>Елизавета Бородина</h6>
            <ul className="list-unstyled">
              <li>@Elizaveta_Borod</li>
            </ul>
            </Col>
        </Row>
        <Row className="mt-4">

            <div className="d-flex">
              <a href="#" className="text-white mr-3"><i className="fab fa-telegram"></i></a>
              <a href="#" className="text-white mr-3"><i className="fab fa-vk"></i></a>
              <a href="#" className="text-white"><i className="fab fa-tiktok"></i></a>
            </div>
      
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p className={styles.p}>&copy; 2024 JoJo.fit Все права защищены.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};


