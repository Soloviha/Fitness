import { Col, Container, Row } from 'react-bootstrap';
import styles from '../../components/css/PersonalPage.module.css';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const FavoriteWorkouts = () => (
  <Container className={styles.FavoriteWorkouts}>
    <Row className={styles.row}>
      <Col className={styles.col}>Тренировка 1</Col>
      <Col className={styles.col}>Тренировка 2</Col>
      <Col className={styles.col}>Тренировка 3</Col>
    </Row>
  </Container>
);

export default FavoriteWorkouts;
    