import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import type { DescCardType } from '../../schemas/descCard.schema';
import styles from '../css/DescCard.module.css';

type DescCardProps = {
  descCard: DescCardType;
};

export default function DescCard({ descCard }: DescCardProps): React.JSX.Element {
  const [isFlipped, setIsFlipped] = useState(false); // Состояние для переворота

  const handleFlip = () => {
    setIsFlipped(prev => !prev); // Переключает состояние
  };

  return (
    <div className={styles.cardContainer}>
      <Card className={`${styles.cardFlip} ${isFlipped ? styles.flipped : ''} `} style={{ border: '2px solid #ccc' }}>
        <div className={styles.cardFront}>
          <Card.Img 
            variant="top" 
            src={descCard.image} 
            className={styles.cardImage} 
          />
          <Button variant="primary" onClick={handleFlip} className={`btn-lg w-40 mb-3 ${styles.detailsButton}`}>
            Подробнее
          </Button>
        </div>
        <div className={styles.cardBack}>
          <Card.Img 
            variant="top" 
            src={descCard.image} 
            className={`${styles.cardImage} ${styles.blurredImage}`} 
          />
          <div className={styles.cardInfo}>
            <h2 className={styles.cardTitle}>{descCard.title}</h2>
            <p className={styles.cardDescription}>{descCard.description}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
