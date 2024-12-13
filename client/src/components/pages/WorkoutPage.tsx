/* eslint-disable no-shadow */
import React from 'react';
import { useAppSelector } from '../../providers/redux/hooks';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import styles from '../css/WorkoutPage.module.css';
import ButtonBase from '@mui/material/ButtonBase';
// import { Button } from '@mui/material';
import { ButtonGroup } from 'react-bootstrap';
// import sport from '../../../public/sport-sajt20.jpg'
// import trening from '../../../public/trening.jpg'
// import sport2 from '../../../public/sport-sajt91.jpg'

export default function WorkoutPage(): React.JSX.Element {
  const navigate = useNavigate();
  const { id } = useParams();
  const workId = id ? Number(id) : undefined;
  const workouts = useAppSelector((state) =>
    state.workout.workouts.filter((el) => el.typeId === workId),
  );

  const handleGoBack = (): void => {
    navigate(-1);
  };

  const images = [
    {
      url: '',
      width: '80%',
    },
    {
      url: '',
      width: '80%',
    },
    {
      url: '',
      width: '80%',
    },
  ];

  return (
    <>
      <div className={styles.workoutCard}>
        <Box className={styles.scrollableBox}>
          {workouts.map((workout, index) => (
            <ButtonBase
              className={styles.imageButton}
              key={workout.id}
              style={{
                backgroundImage: `url(${images[index % images.length].url})`,
              }}
            >
              <span className={styles.imageSrc} />
              <span className={styles.imageBackdrop} />
              <span className={styles.image}>
                <NavLink to={`/types/workouts/exercises/${workout.id.toString()}`} className="nav-link">
                  <Typography
                    // component="span"
                    // variant="subtitle1"
                    // color="inherit"

                  >
                    {workout.name}
                    <span className={styles.imageMarked} />
                  </Typography>
                </NavLink>
              </span>
            </ButtonBase>
          ))}
        </Box>

        <ButtonGroup
          className={styles.button}
          onClick={handleGoBack}
        >
          Назад
        </ButtonGroup>
      </div>
    </>
  );
}
