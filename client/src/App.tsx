import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './providers/redux/hooks';
import { refreshThunk } from './providers/slice/auth/authThunks';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import HelloPage from './components/pages/HelloPage';
import ProtectedRouter from './HOCs/ProtectedRouter';

import PersonalPage from './components/pages/PersonalPage';

import TypePage from './components/pages/TypePage';
import WorkoutPage from './components/pages/WorkoutPage';
// import WorkoutCardOne from './components/ui/WorkoutCardOne';
import LoginModal from './components/pages/LoginModal';
import SignupModal from './components/pages/SignupModal';
import { getAllWorkouts } from './providers/slice/workout/WorkoutThunk';
import ExercisePage from './components/pages/ExercisePage';

function App(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const isUser = useAppSelector((state) => !!state.auth.user);

  useEffect(() => {
    void dispatch(refreshThunk());
  }, [dispatch]);

  useEffect(() => {
    void dispatch(getAllWorkouts());
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HelloPage />,
        },
        {
          element: <ProtectedRouter isAllowed={isUser} redirectTo="/login" />,
          children: [
            {
              path: '/types',
              element: <TypePage />,
            },
            {
              path: '/types/workouts/:id',
              element: <WorkoutPage />,
            },
            {
              path: '/types/workouts/exercises/:id',
              element: <ExercisePage />,
            },
            // {
            //   path: '/types/workouts',
            //   element: <WorkoutPage />,
            // },
            // {
            //   path: '/types/workouts/:id',
            //   element: <WorkoutCardOne />,
            // },
            // {
            //   path: '/rests/new',
            //   element: <AddRestPage />,
            // },
          ],
        },
        {
          element: <ProtectedRouter isAllowed={!isUser} redirectTo="/" />,
          children: [
            {
              path: '/login',
              element: <LoginModal />,
            },
            {
              path: '/signup',
              element: <SignupModal />,
            },
            {
              path: '/user/profile',
              element: <PersonalPage />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
