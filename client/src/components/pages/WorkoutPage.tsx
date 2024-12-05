import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../providers/redux/hooks';
import { getAllWorkouts } from '../../providers/slice/workout/WorkoutThunk';
import WorkoutCard from '../ui/WorkoutCard';

export default function WorkoutPage(): React.JSX.Element {
  const workouts = useAppSelector((state) => state.workout.workouts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getAllWorkouts());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row">
        {workouts.map((workout) => (
          <div className="col-12" key={workout.id}>
            <WorkoutCard workout={workout}/>
          </div>
        ))}
      </div>
    </div>
  );
}
