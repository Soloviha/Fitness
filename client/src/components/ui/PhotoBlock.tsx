import { PictureAsPdf } from '@mui/icons-material';
import { Col, Container, Image, Row } from 'react-bootstrap';
import styles from '../../components/css/PersonalPage.module.css';

const PhotoBlock = () => (
  <Container className={styles.PhotoBlock}>
    <Row className={styles.row}>
      <Col className={styles.col}>
        <Image
          src="https://twizz.ru/wp-content/uploads/2017/05/%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD%D0%B02.jpg"
          height={300}
          width={600}
        />
      </Col>
    </Row>
  </Container>
);

export default PhotoBlock;
