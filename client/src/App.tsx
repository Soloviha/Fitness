import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './providers/redux/hooks';
import { refreshThunk } from './providers/slice/auth/authThunks';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import HelloPage from './components/pages/HelloPage';
import ProtectedRouter from './HOCs/ProtectedRouter';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import TypePage from './components/pages/TypePage';

function App(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const isUser = useAppSelector((state) => !!state.auth.user);

  useEffect(() => {
    void dispatch(refreshThunk());
  }, []);

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
            // {
            //   path: '/rests/:id',
            //   element: <OneRestCard />,
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
