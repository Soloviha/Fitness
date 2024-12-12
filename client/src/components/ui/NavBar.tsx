import React, { useState, useEffect } from 'react';
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
import { Avatar } from '@mui/material';
import styles from '../css/NavBar.module.css';
import { getMyParameters } from '../../providers/slice/parametr/userParameterThunk';
import { resetUserParameter } from '../../providers/slice/parametr/userParameterSlice';


export default function NavBar(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, accessToken } = useAppSelector((state) => state.auth);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const logoutHandler = (): void => {
    void dispatch(logoutThunk());
    void dispatch(resetUserParameter()); 
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


  return (
    <>
      <Navbar className={styles.navbar} expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <NavLink to="/" style={{ textDecoration: 'none' }}>
              <Navbar.Brand className={styles.navbarBrand}>
                <Avatar
                  alt="Remy Sharp"
                  src="../../../public/assets/photo-output-1.PNG"
                  sx={{ width: 70, height: 70 }}
                />
              </Navbar.Brand>
            </NavLink>
            <Navbar.Brand
              className={`${styles.gradient_text} ${styles.navbarBrand} ${styles.navbarText}`}
            >
              {'fit'}
            </Navbar.Brand>
            <Nav className="me-auto">
              <NavLink to="/types" className={`nav-link ${styles.navLink}`}>
                Тренировки
              </NavLink>
              <NavLink to="/userP" className={`nav-link ${styles.navLink}`}>
                Пользовательские параметры
              </NavLink>
            </Nav>
            <Nav>
              <Nav.Link
                href="#"
                className={`nav-link ${styles.navLink} ${styles.personalCabinet}`}
                style={{
                  pointerEvents: user ? 'none' : 'auto',
                  opacity: user ? 0.5 : 1,
                }}
                onClick={openLoginModal}
              >
                <span style={{ marginRight: '8px' }}>Личный кабинет</span>
                <FaUserCircle size={20} />
              </Nav.Link>
            </Nav>
            {  user && accessToken && (
              <Nav>
                <NavLink
                  to="/login"
                  className={`nav-link ${styles.navLink} ${styles.logoutButton} ${styles.nav}`}
                  onClick={logoutHandler}
                >
                  Выход
                </NavLink>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {isLoginModalOpen && <LoginModal openSignupModal={openSignupModal} />}
      <SignupModal />
    </>
  );
}
