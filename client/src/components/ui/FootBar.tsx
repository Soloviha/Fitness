import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function FootBar(): React.JSX.Element{
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col md={3}>
            <h5>О компании</h5>
            <ul className="list-unstyled">
              <li>Карьера</li>
              <li>Рекламные возможности</li>
              <li>Франшиза</li>
              <li>Площадки под новые клубы</li>
              <li>Политика обработки персональных данных</li>
              <li>Корпоративное членство</li>
              <li>Отзывы</li>
              <li>Карта сайта</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Тренировки</h5>
            <ul className="list-unstyled">
              <li>Тренеры</li>
              <li>Тренажерный зал</li>
              <li>Групповые тренировки</li>
              <li>Персональные тренировки</li>
              <li>Тренировки онлайн</li>
              <li>Тренировки для новичков</li>
              <li>Тренировки для студентов</li>
              <li>Расписание</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Услуги</h5>
            <ul className="list-unstyled">
              <li>Экскурсия по клубу</li>
              <li>Сауны и хаммам</li>
              <li>Недорогие абонементы</li>
              <li>Разовое посещение</li>
              <li>Фитнес для подростков</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Членам клуба</h5>
            <ul className="list-unstyled">
              <li>Абонементы</li>
              <li>Программа лояльности</li>
              <li>Партнеры и привилегии</li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={3}>
            <h5>Жизнь Spirit.People</h5>
            <ul className="list-unstyled">
              <li>Акции</li>
              <li>Spirit.TV</li>
              <li>Мероприятия</li>
              <li>Блог</li>
            </ul>
            <div className="d-flex">
              <a href="#" className="text-white mr-3"><i className="fab fa-telegram"></i></a>
              <a href="#" className="text-white mr-3"><i className="fab fa-vk"></i></a>
              <a href="#" className="text-white"><i className="fab fa-tiktok"></i></a>
            </div>
            <div className="mt-3">
              <p>8 999 989 81 36</p>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p>&copy; 2024 JoJo.fit Все права защищены.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};


