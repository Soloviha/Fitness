import React from 'react';
import styles from '../css/Spinner.module.css'; // Импортируйте стили для спиннера

export default function Spinner (): React.JSX.Element {
  return (
    <div className={styles.spinner}>
      {/* Здесь можно добавить анимацию или изображение спиннера */}
      <div className={styles.loader}></div>
    </div>
  );
};


