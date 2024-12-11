import React, { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import styles from '../css//TypePage.module.css';
import { useAppDispatch, useAppSelector } from '../../providers/redux/hooks';
import { getAll } from '../../providers/slice/type/typeThunk';
import { NavLink } from 'react-router-dom';

export default function TypePage(): React.JSX.Element {
  const types = useAppSelector((state) => state.type.types);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getAll());
  }, [dispatch]);

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
    margin: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],

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
    <div className={styles.typeCard}>
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
        {types.map((type, index) => (
            <>
            
          <ImageButton
            focusRipple
            key={type.id}
            style={{
              width: images[index % images.length].width,
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${images[index % images.length].url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image className={styles.img}>
            <NavLink to={`/types/workouts/${type.id}`} className='nav-link'>
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
                {type.name}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
              </NavLink>
            </Image>
        
          </ImageButton>
            
              </>
        ))}
      </Box>
    </div>
  );
}
