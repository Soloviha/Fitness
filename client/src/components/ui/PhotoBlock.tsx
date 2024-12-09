import { PictureAsPdf } from '@mui/icons-material';
import { Button, ButtonGroup, Col, Container, Image, Row } from 'react-bootstrap';
import styles from '../../components/css/PersonalPage.module.css';

const PhotoBlock = () => (
  <Container className={styles.PhotoBlock}>
    <Row className={styles.row}>
      <Col className={styles.col}>
        <Image
          src="https://twizz.ru/wp-content/uploads/2017/05/%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD%D0%B02.jpg"
          height={200}
          width={500}
        
        />
      </Col>
    </Row>
    <Row className={styles.PhotoBlock}>
      <ButtonGroup>
        <Col className={styles.col}>
        {' '}<Button>06/08/2024</Button>{' '}
        </Col>
        <Col className={styles.col}>
        {' '}<Button>06/12/2024</Button>{' '}
         
        </Col>
      </ButtonGroup>
    </Row>
  </Container>
);

export default PhotoBlock;
