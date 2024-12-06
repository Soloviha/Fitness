import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './providers/redux/hooks';
import { refreshThunk } from './providers/slice/auth/authThunks';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import HelloPage from './components/pages/HelloPage';
import ProtectedRouter from './HOCs/ProtectedRouter';
import LoginPage from './components/pages/LoginModal';
import SignupPage from './components/pages/SignupModal';

import TypeCard from './components/ui/TypeCard';
import TypePage from './components/pages/TypePage';
import WorkoutPage from './components/pages/WorkoutPage';
import WorkoutCardOne from './components/ui/WorkoutCardOne';

function App(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const isUser = useAppSelector((state) => !!state.auth.user);

  useEffect(() => {
    void dispatch(refreshThunk());
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
              path: '/types/workouts',
              element: <WorkoutPage />,
            },
            {
              path: '/types/workouts/:id',
              element: <WorkoutCardOne/>,
            },
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
              element: <LoginPage />,
            },
            {
              path: '/signup',
              element: <SignupPage />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
