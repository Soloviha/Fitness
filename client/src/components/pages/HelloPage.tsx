import React, { useEffect } from 'react';
import styles from '../css/HelloPage.module.css';
import { useAppSelector, useAppDispatch } from '../../providers/redux/hooks';
import DescCard from '../ui/DescCard';
import { Col, Row } from 'react-bootstrap';
import { getAllDescCard } from '../../providers/slice/descCard/DescCardTHunk';


export default function HelloPage(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const descCard = useAppSelector((state) => state.descCard.descCard);

  useEffect(() => {
    void dispatch(getAllDescCard());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.background_video}>
        <video autoPlay loop muted>
          <source src="/2024-12-05_14.52.37.mp4" type="video/mp4" />
        </video>
      </div>

      <div className={styles.content_wrapper}>
        <h1 className={styles.h1}>JOJO_fit</h1>
      </div>
        <Row>
          {descCard.length > 0 ? (
            descCard.map((el) => (
              <Col key={el.id}>
                  <DescCard descCard={el} />
              </Col>
            ))
          ) : (
            <p>Нет доступных карточек</p>
          )}
        </Row>
     
    </div>
  );
}
