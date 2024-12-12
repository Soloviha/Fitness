/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useEffect } from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import styles from '../css/TypePage.module.css';
import { useAppDispatch, useAppSelector } from '../../providers/redux/hooks';
import { getAll } from '../../providers/slice/type/typeThunk';
import { NavLink } from 'react-router-dom';

export default function TypePage(): React.JSX.Element {
  const types = useAppSelector((state) => state.type.types);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getAll());
  }, [dispatch]);

  const images = [
    {
      url: '../../../public/sport-sajt20.jpg',
    },
    {
      url: '../../../public/trening.jpg',
    },
    {
      url: '../../../public/sport-sajt91.jpg',
    },
  ];

  return (
    <div className={styles.typeCard}>
      <div className={styles.box}>
        {types.map((type, index) => (
          <ButtonBase
            className={styles.imageButton}
            key={type.id}
            style={{ backgroundImage: `url(${images[index % images.length].url})` }}
          >
            <span className={styles.imageSrc} />
            <span className={styles.imageBackdrop} />
            <span className={styles.image}>
              <NavLink to={`/types/workouts/${type.id}`} className='nav-link'>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{ position: 'relative', p: 4, pt: 2, pb: 'calc(16px + 6px)' }}
                >
                  {type.name}
                  <span className={styles.imageMarked} />
                </Typography>
              </NavLink>
            </span>
          </ButtonBase>
        ))}
      </div>
    </div>
  );
}
