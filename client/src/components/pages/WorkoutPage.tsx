/* eslint-disable no-shadow */
import React from 'react';
import { useAppSelector } from '../../providers/redux/hooks';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import styles from '../css/WorkoutPage.module.css';
import ButtonBase from '@mui/material/ButtonBase';
import { Button } from '@mui/material';

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

  const theme = useTheme();

  const images = [
    {
      url: '../../../public/sport-sajt13.jpg',
      width: '80%',
    },
    {
      url: '../../../public/registr.jpg',
      width: '80%',
    },
    {
      url: '../../../public/sport-sajt91.jpg',
      width: '80%',
    },
  ];

  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 240,
    width: '100%', // Добавьте это свойство, чтобы растянуть карточки на всю ширину
    margin: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],

    [theme.breakpoints.down('sm')]: {
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
      // '& .MuiTypography-root': {
      //   border: '4px solid currentColor',
      // },
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
    borderRadius: 'inherit',
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
    width: '100%', // Добавьте это свойство, чтобы растянуть текст на всю ширину
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

  return (
    <>
      <div className={styles.workoutCard}>
        <Box
          sx={{
            position: 'relative',
            zIndex: '2',
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
                <ImageSrc
                  style={{ backgroundImage: `url(${images[index % images.length].url})` }}
                />
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <Image className={styles.img}>
                  <NavLink to={`/types/workouts/exercises/${workout.id.toString()}`} className="nav-link">
                    <Typography
                      component="span"
                      variant="subtitle1"
                      color="inherit"
                      sx={(theme) => ({
                        position: 'relative',
                        p: 4,
                        pt: 2,
                        pb: `calc(${theme.spacing(1)} + 6px)`,
                      })}
                    >
                      {workout.name}
                      <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                  </NavLink>
                  {/* <div>{workout.description}</div>
                <div>⌚: {workout.time} мин.</div>
                <div>🔥: {workout.kcal} Ккал</div> */}
                </Image>
              </ImageButton>
            </>
          ))}
        </Box>

        <Button
          className={styles.button}
          onClick={handleGoBack}
          style={{
            fontSize: '17px',
            width: '200px',

            cursor: 'pointer',
            color: '#fff',
            height: '70px',
            borderRadius: '12px',
          }}
        >
          Назад
        </Button>
      </div>
    </>
  );
}
