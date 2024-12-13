import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import type { ExerciseType } from '../../schemas/exercise.schema';
import styles from '../css/Exercise.module.css'; // Импортируем новый CSS файл

type ExerciseCardProps = {
  exercise: ExerciseType;
};

export default function ExerciseCard({ exercise }: ExerciseCardProps): React.JSX.Element {
  return (
    <div className={styles.card_container}>
      <Card className={styles.styled_card}>
        <img src={exercise.picture} alt={exercise.name} className={styles.img} />
        <CardContent className={styles.styled_card_content}>
          <Typography className={styles.styled_title} variant="h5">
            {exercise.name}
          </Typography>
          <Typography className={styles.styled_description} variant="body1">
            {exercise.description}
          </Typography>
          <Box className={styles.styled_info_box}>
            <Box className={styles.styled_info_item}>
              <Typography variant="body2">Время: {exercise.time} сек.</Typography>
            </Box>
            <Box className={styles.styled_info_item}>
              <Typography variant="body2">Повторений: {exercise.reps}</Typography>
            </Box>
            <Box className={styles.styled_info_item}>
              <Typography variant="body2">Отдых: {exercise.relax} сек.</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
