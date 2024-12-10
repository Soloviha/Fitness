import React from 'react';
import { styled } from '@mui/system';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import type { ExerciseType } from '../../schemas/exercise.schema';
import styles from '../css/Exercise.module.css';

const StyledCard = styled(Card)({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
});

const StyledCardMedia = styled(CardMedia)({
  width: '50%',
  height: 'auto',
});

const StyledCardContent = styled(CardContent)({
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '24px',
});

const StyledTitle = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '1.5rem',
  marginBottom: '12px',
});

const StyledDescription = styled(Typography)({
  fontSize: '1.125rem',
  marginBottom: '12px',
});

const StyledInfoBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  '& > *': {
    marginBottom: '24px',
  },
});

const StyledInfoItem = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

type ExerciseCardProps = {
  exercise: ExerciseType;
};

export default function ExerciseCard({ exercise }: ExerciseCardProps): React.JSX.Element {
  return (
    <StyledCard>
      <StyledCardMedia
        // component="video"
        // src={exercise.videoUrl}
        title={exercise.name}
      />
      <img src={exercise.picture} />
      <StyledCardContent>
        <StyledTitleAndDescription>
          <StyledTitle variant="h5">{exercise.name}</StyledTitle>
          <StyledDescription variant="body1">{exercise.description}</StyledDescription>
        </StyledTitleAndDescription>
        <StyledInfoBox>
          <StyledInfoItem>
            <Typography variant="body2">Время: {exercise.time} сек.</Typography>
          </StyledInfoItem>
          <StyledInfoItem>
            <Typography variant="body2">Повторений: {exercise.reps} </Typography>
          </StyledInfoItem>
          <StyledInfoItem>
            <Typography variant="body2">Отдых: {exercise.relax} сек.</Typography>
          </StyledInfoItem>
        </StyledInfoBox>
      </StyledCardContent>
    </StyledCard>
  );
}
