import React from 'react';
import type { ExerciseType } from '../../schemas/exercise.schema';
import { styled } from '@mui/material/styles';
import styles from '../css/TreningCard.module.css';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

type TreningCardProps = {
  trening: ExerciseType;
};

export default function TreningCard({ trening }: TreningCardProps): React.JSX.Element{
  
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
          <>
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image className={styles.img}>
                  <Typography gutterBottom variant="h5" component="div">
                    {trening.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {trening.description}
                  </Typography>
              </Image>
          </>
      </Box>
      );
}
