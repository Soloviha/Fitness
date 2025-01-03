import React, { useEffect, useState } from 'react';
import styles from '../css/HelloPage.module.css';
import { useAppSelector, useAppDispatch } from '../../providers/redux/hooks';
import { getAllDescCard } from '../../providers/slice/descCard/DescCardTHunk';
import LiteVariant from '../ui/LiteVariant';
import video from '../../../public/video.mp4';
import videorun from '../../../public/video-run.mp4'

export default function HelloPage(): React.JSX.Element {
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const dispatch = useAppDispatch();
  const descCard = useAppSelector((state) => state.descCard.descCard);

  useEffect(() => {
    void dispatch(getAllDescCard());
  }, [dispatch]);

  useEffect(() => {
      const handleResize = (): void => {
          if (window.innerWidth >= 768) {
              setItemsPerPage(4);
          } else {
              setItemsPerPage(1); 
          }
      };
      handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.background_video}>
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
      </div>

   
        <h2 className={styles.videoTitle}>JoJo.Fit | в твоем телефоне </h2>
        <div className={styles.div}>
        <p className={styles.videoSubtitle}>Личный тренер</p>
        <div className={styles.videoText}>
          <h3 className={styles.h3}>Занимайтесь спортом </h3>
            <h3>где угодно и когда угодно 
            с нашим инновационным приложением для онлайн-тренировок!</h3>
          <p className={styles.p}>Приложение предоставляет доступ к разнообразным программам, адаптированным под ваши цели и уровень подготовки. Ваш путь к здоровью и фитнесу начинается здесь!</p>
        </div>
      </div>
  

      <div className={styles.contentWrapper}>
        <h1 className={styles.h1}>JOJO_fit</h1>
      </div>



      {/* Карточки */}
      <div className={styles.cardContainer} >
        {descCard.length > 0 && <LiteVariant itemsPerPage={itemsPerPage} descCard={descCard} />}
      </div>

       {/* Горизонтальная черта */}
       <hr className={styles.horizontalLine} />

      <div className={styles.videoContainer}>
        {/* Рамка с текстом */}
        <div className={styles.textBox}>
          <h2 className={styles.h2}>Почему же так важен бег?</h2>
          <p>
            При беге повышается настроение, улучшается работа головного мозга и желудочно-кишечного
            тракта. Бег на открытом воздухе повышает иммунитет. Бег дисциплинирует, люди бегающие
            регулярно, оценив его положительный эффект на организм в целом, довольные своей фигурой
            и своей работоспособностью, не пропускают тренировки.
          </p>
        </div>

        <div className={styles.backgroundRun}>
          <video autoPlay loop muted>
            <source src={videorun} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
