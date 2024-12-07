import React from 'react';
import type { ExerciseType } from '../../schemas/exercise.schema';

type ExerciseCardProps = {
  exercise: ExerciseType;
};

export default function ExerciseCard({ exercise }: ExerciseCardProps): React.JSX.Element {

  return (
    <div className="workout-card">
    <h2>{exercise.name}</h2>
    <p>{exercise.description}</p>
    <p>Время тренировки: {exercise.time} сек.</p>
    <p>Время отдыха: {exercise.relax} сек.</p>
    <p>Повторений: {exercise.reps} сек.</p>
  </div>
  );
}
