import React from 'react';
import { styled } from '@mui/system';
import { Card, CardContent, Typography, Box } from '@mui/material';
import type { ExerciseType } from '../../schemas/exercise.schema';
import styles from '../css/Exercise.module.css';

const StyledCard = styled(Card)({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
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
    <div className={styles.card_container}>
      <StyledCard className={styles.styled_card}>
        <img src={exercise.picture} alt={exercise.name} className={styles.img} />
        <StyledCardContent className={styles.styled_title_and_description}>
         
          <StyledTitle className={styles.styled_title} variant="h5">
            {exercise.name}
          </StyledTitle>
          <StyledDescription className={styles.styled_description} variant="body1">
            {exercise.description}
          </StyledDescription>
          <StyledInfoBox className={styles.styled_info_box}>
            <StyledInfoItem className={styles.styled_info_item}>
              <Typography variant="body2">Время: {exercise.time} сек.</Typography>
            </StyledInfoItem>
            <StyledInfoItem className={styles.styled_info_item}>
              <Typography variant="body2">Повторений: {exercise.reps}</Typography>
            </StyledInfoItem>
            <StyledInfoItem className={styles.styled_info_item}>
              <Typography variant="body2">Отдых: {exercise.relax} сек.</Typography>
            </StyledInfoItem>
          </StyledInfoBox>
        </StyledCardContent>
      </StyledCard>
    </div>
  );
}
