/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/Time.module.css';

type TimerProps = {
  isResting: boolean;
  remainingTime: number;
};

export default function Timer({ isResting, remainingTime }: TimerProps): React.JSX.Element {
  useEffect(() => {}, [remainingTime]);
  const navigate = useNavigate();

  const handleGoBack = (): void => {
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h2 className={styles.h2}>{isResting ? 'Отдых' : 'Тренировка'}</h2>
        <div className={styles.div}>{Math.ceil(remainingTime / 1000)} секунд</div>
        <button className={styles.button} onClick={handleGoBack}>
          Завершить тренировку
        </button>
      </div>
    </div>
  );
}
