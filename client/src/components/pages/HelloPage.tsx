import React from 'react';
import styles from '../css/HelloPage.module.css';

export default function HelloPage(): React.JSX.Element {
  return (
    <div className={styles.container}>
      <div>
        <div className={`${styles.background_video} background-video`}>
          <video autoPlay loop muted>
            <source src="../../../public/2024-12-05_14.52.37.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={styles.content_wrapper}>
          <main className={styles.main_content}>
            <h1 className={styles.h1}>JOJO_fit</h1>
            <p className={styles.p}>Твой личный тренер</p>
          </main>
        </div>
      </div>
    </div>
  );
}
