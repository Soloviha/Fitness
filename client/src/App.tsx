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
import LoginModal from './components/pages/LoginModal';
import SignupModal from './components/pages/SignupModal';
// import TestPage from './components/pages/TestPage';
import Lizaui from '../src/components/ui/Lizaui'
import { getAllWorkouts } from './providers/slice/workout/WorkoutThunk';
import { getAllExercises } from './providers/slice/exercise/ExerciseThunk';
import ExercisePage from './components/pages/ExercisePage';
import ErorrPage from './components/pages/ErorrPage';

function App(): React.JSX.Element {
  const dispatch = useAppDispatch();
  // const [deferredPrompt, setDeferredPrompt] = useState(null);
  const isUser = useAppSelector((state) => !!state.auth.user);

  // useEffect(() => {
  //   const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent): void => {
  //     e.preventDefault();
  //     setDeferredPrompt(e);
  //   };

  //   window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

  //   return () => {
  //     window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  //   };
  // }, []);

  // const handleInstallClick = () => {
  //   if (deferredPrompt) {
  //     deferredPrompt.prompt();
  //     deferredPrompt.userChoice.then((choiceResult) => {
  //       if (choiceResult.outcome === 'accepted') {
  //         console.log('Пользователь установил приложение');
  //       } else {
  //         console.log('Пользователь отказался от установки');
  //       }
  //       setDeferredPrompt(null);
  //     });
  //   }
  // };

  useEffect(() => {
    void dispatch(refreshThunk());
  }, [dispatch]);

  useEffect(() => {
    void dispatch(getAllWorkouts());
  }, [dispatch]);

  useEffect(() => {
    void dispatch(getAllExercises())
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <ErorrPage/>,
      children: [
        {
          path: '/',
          element: <HelloPage />,
        },
        {
          path: '/user/profile',
          element: <PersonalPage />,
        },

        {
          path: '/userP',
          element: <Lizaui/>,
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
              path: 'types/workouts/exercises/:id',
              element: <ExercisePage />,
            },
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
            // {
            //   path: '/user/profile',
            //   element: <PersonalPage />,
            // },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
