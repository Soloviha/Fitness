import React from 'react';
import { ExerciseType } from '../../schemas/exercise.schema';

interface WorkoutCardProps {
  workout: ExerciseType;
}

export default function Popa({ workout }: WorkoutCardProps): React.JSX.Element {


  return (
    <div className="workout-card">
      <h2>{workout.name}</h2>
      <p>{workout.description}</p>
      <p>Время тренировки: {workout.time} сек.</p>
      <p>Время отдыха: {workout.relax} сек.</p>
      <p>Повторений: {workout.reps} сек.</p>
    </div>
  );
}
