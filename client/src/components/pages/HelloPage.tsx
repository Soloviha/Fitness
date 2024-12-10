import React, { useEffect } from 'react';
import styles from '../css/HelloPage.module.css';
import { useAppSelector, useAppDispatch } from '../../providers/redux/hooks';
import DarkVariantExample from '../ui/DarkVariantExample';
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
          <source src="../../../public/video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className={styles.videoOverlay}>
        {/* <h2 className={styles.videoTitle}>JoJo.Fit | Тренировки</h2>
        <p className={styles.videoSubtitle}>Тренировки</p> */}
        <div className={styles.videoText}>
          {/* <h3>Занимайтесь спортом где угодно и когда угодно 
            с нашим инновационным приложением для онлайн-тренировок.</h3>
          <p>Приложение предоставляет доступ к разнообразным программам, адаптированным под ваши цели и уровень подготовки. Ваш путь к здоровью и фитнесу начинается здесь!</p> */}
        </div>
      </div>

      <div className={styles.content_wrapper}>
        <h1 className={styles.h1}>JOJO_fit</h1>
      </div>

      {descCard.length > 0 && <DarkVariantExample descCard={descCard} />}

      {/* Горизонтальная черта */}
      <hr className={styles.horizontalLine} />

      <div className={styles.videoContainer}>
        {/* Рамка с текстом */}
        <div className={styles.textBox}>
          <h2 className={styles.h2}>Почему же так важен бег?</h2>
          <p>
            При беге повышается настроение, улучшается работа головного мозга и
            желудочно-кишечного тракта. Бег на открытом воздухе повышает
            иммунитет. Бег дисциплинирует, люди бегающие регулярно, оценив его
            положительный эффект на организм в целом, довольные своей фигурой и
            своей работоспособностью, не пропускают тренировки.
          </p>
        </div>

        <div className={styles.backgroundRun}>
          <video autoPlay loop muted>
            <source src="/videorun.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
