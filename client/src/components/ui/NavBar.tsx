import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../providers/redux/hooks';
import { setModalOpen, setSignupModalOpen } from '../../providers/slice/auth/authSlice';
import { FaUserCircle } from 'react-icons/fa';
import LoginModal from '../pages/LoginModal';
import SignupModal from '../pages/SignupModal';
import { logoutThunk } from '../../providers/slice/auth/authThunks';  
import styles from '../css/NavBar.css.module.css'
import styles from '../../components/css/NavBar.css.module.css';
import { Avatar } from '@mui/material';



export default function NavBar(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, accessToken } = useAppSelector((state) => state.auth);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const logoutHandler = (): void => {
    void dispatch(logoutThunk());
    navigate('/');
  };

  const openLoginModal = (): void => {
    if (!user) {
      setIsLoginModalOpen(true);
      void dispatch(setModalOpen());
    }
  };

  const openSignupModal = (): void => {
    setIsLoginModalOpen(false);
    void dispatch(setSignupModalOpen());
  };

  const navigateToHome = (): void => {
    navigate('/');
  };
  return (
    <>
      <Navbar className={styles.navbar}>
        <Container>

          <NavLink to='/'>

        

          <Navbar.Brand href="/" style={{ fontSize: '24px', color: 'white' }}></Navbar.Brand>
          


          <Avatar
            alt="Remy Sharp"
            src="../../../public/photo-output.PNG"
            sx={{ width: 70, height: 70 }}
          />
          </NavLink>
          <Navbar.Brand href="/" style={{ fontSize: '24px', color: 'white' }} className={styles.gradient_text}>
            {'JoJo_fit'}
          </Navbar.Brand>

          <Nav className="me-auto" style={{ fontSize: '18px' }}>
            <NavLink to="/types" className="nav-link" style={{ color: 'white' }}>
              Тренировки
            </NavLink>
            <NavLink to="/types/workouts" className="nav-link" style={{ color: 'white' }}>
              Упражнения
            </NavLink>
            {user && accessToken ? (
              <NavLink
                to="/login"
                className="nav-link"
                onClick={logoutHandler}
                style={{ color: 'white' }}
              >
                Выход
              </NavLink>
            ) : (
              <Nav.Link
                href="#"
                className="nav-link"
                onClick={openLoginModal}
                style={{ color: 'white' }}
              ></Nav.Link>
            )}
          </Nav>
          <Nav>
            <Nav.Link
              href="#"
              className="nav-link"
              style={{
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                pointerEvents: user ? 'none' : 'auto',
                opacity: user ? 0.5 : 1,
              }}
              onClick={openLoginModal}
            >
              <span style={{ marginRight: '8px' }}>Личный кабинет</span>
              <FaUserCircle size={24} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {isLoginModalOpen && <LoginModal openSignupModal={openSignupModal} />}
      <SignupModal />
    </>
  );
}
