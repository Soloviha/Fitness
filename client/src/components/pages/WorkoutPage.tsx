<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../providers/redux/hooks';
import { getAllWorkouts } from '../../providers/slice/workout/WorkoutThunk';
import WorkoutCard from '../ui/WorkoutCard';
// import Timer from '../ui/Timer'; // Предполагается, что этот компонент отображает обратный отсчет

export default function WorkoutPage(): React.JSX.Element {
  const workouts = useAppSelector((state) => state.workout.workouts);
  const dispatch = useAppDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timerDuration, setTimerDuration] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
=======
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { useAppSelector } from '../../providers/redux/hooks';
import { NavLink, useParams } from 'react-router-dom';
import styles from '../css//WorkoutPage.module.css';

export default function WorkoutPage(): React.JSX.Element {
  const { id } = useParams();
  const restId = id ? Number(id) : undefined;
  const workouts = useAppSelector((state) => state.workout.workouts.filter((el) => el.typeId === restId));
>>>>>>> dev

  const theme = useTheme();

  const images = [
    {
      url: '../../../public/sport-sajt20.jpg',
      width: '40%',
    },
    {
      url: '../../../public/trening.jpg',
      width: '30%',
    },
    {
      url: '../../../public/sport-sajt91.jpg',
      width: '30%',
    },
  ];

  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    margin: theme.spacing(2), // Отступы между кнопками
    borderRadius: theme.shape.borderRadius, // Закругленные углы
    boxShadow: theme.shadows[3], // Тень для кнопок

    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));

  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
    borderRadius: 'inherit', // Закругление углов изображения
  });

  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));

  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.7,
    transition: theme.transitions.create('opacity'),
  }));

  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
  }));

  useEffect(() => {
    if (currentIndex < workouts.length) {
      const workout = workouts[currentIndex];
      setTimerDuration(3000); // Устанавливаем длительность таймера

      const workoutTime =3000; 
      const pauseTime = 1000; 

      const totalDuration = workoutTime + pauseTime;

      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, totalDuration);

      return () => clearTimeout(timer);
    } else {
      setIsFinished(true);
    }
  }, [currentIndex, workouts]);

  if (isFinished) {
    return <div>Все тренировки завершены!</div>;
  }

  return (
    // <div className="container">
    //   <div className="row">
    //     {currentIndex < workouts.length && (
    //       <div className="col-12">
    //         <WorkoutCard workout={workouts[currentIndex]} />
    //         {/* <Timer duration={timerDuration} /> Показываем таймер для текущего workout */}
    //       </div>
    //     )}
    //   </div>
    // <div className={styles.typeCard}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          justifyContent: 'center',
          minWidth: 300,
          width: '100%',
          padding: theme.spacing(2),
          overflowX: 'auto',
          marginTop: '100px',
        }}
      >
        {workouts.map((workout, index) => (
          <>
            <ImageButton
              focusRipple
              key={workout.id}
              style={{
                width: images[index % images.length].width,
              }}
            >
              <ImageSrc style={{ backgroundImage: `url(${images[index % images.length].url})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image className={styles.img}>
                <NavLink to={`/types/workouts/exercises/${workout.id}`} className="nav-link">
                  <Typography gutterBottom variant="h5" component="div">
                    {workout.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {workout.description}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {workout.time} - {workout.kcal}
                  </Typography>
                </NavLink>
              </Image>
            </ImageButton>
          </>
        ))}
      </Box>
    // </div>
  );
}