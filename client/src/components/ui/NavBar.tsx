import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../providers/redux/hooks';
import { setModalOpen } from '../../providers/slice/auth/authSlice';
import { FaUserCircle } from 'react-icons/fa';
import LoginModal from '../pages/LoginModal';
import SignupModal from '../pages/SignupModal';
import { logoutThunk } from '../../providers/slice/auth/authThunks';
import { Avatar } from '@mui/material';
import styles from '../css/NavBar.module.css';
import { resetUserParameter } from '../../providers/slice/parametr/userParameterSlice';
import logo from '../../../public/assets/logo.png';

export default function NavBar(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // Получаем текущий путь
  const { user, accessToken } = useAppSelector((state) => state.auth);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const isUserP = location.pathname === '/userP'; // Проверяем, находимся ли мы на странице userP

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

  // const openSignupModal = (): void => {
  //   setIsLoginModalOpen(false);
  //   void dispatch(setSignupModalOpen());
  // };

  const handlePersonalCabinetClick = (): void => {
    if (user) {
      navigate('/userP'); // Перенаправляем на страницу пользовательских параметров
    } else {
      openLoginModal(); // Открываем модальное окно для входа
    }
  };

  return (
    <>
      <Navbar className={`${styles.navbar} ${isUserP ? styles.userPNavbar : ''}`} expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className={styles.collabs}>
            <NavLink to="/" style={{ textDecoration: 'none' }}>
              <Navbar.Brand className={styles.navbarBrand}>
                <Avatar
                  className={styles.avatar}
                  alt="Remy Sharp"
                  src={logo}
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
              <div className={styles.nav}>
                <NavLink to="/" className={`nav-link ${styles.home}`}>
                  {/* Главная */}
                </NavLink>
                <NavLink to="/types" className={`nav-link ${styles.navLink}`}>
                  Тренировки
                </NavLink>
                {user ? null : (
                  <NavLink to="/userP" className={`nav-link ${styles.navLink}`}>
                    {/* Ссылка на пользовательский профиль */}
                  </NavLink>
                )}
              </div>
            </Nav>
            <Nav>
              <Nav.Link
                href="#"
                className={`nav-link ${styles.navLink} ${styles.personalCabinet}`}
                onClick={handlePersonalCabinetClick}
              >
                <span style={{ marginRight: '8px' }} className={styles.nav}>
                  Личный кабинет
                </span>
                <FaUserCircle size={20} />
              </Nav.Link>
            </Nav>
            {user && accessToken && (
              <Nav>
                <div className={styles.nav}>
                  <NavLink
                    to="/login"
                    className={`nav-link ${styles.navLink} ${styles.logoutButton} ${styles.nav}`}
                    onClick={logoutHandler}
                  >
                    Выход
                  </NavLink>
                </div>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {isLoginModalOpen && <LoginModal  />}
      <SignupModal />
    </>
  );
}

// openSignupModal={openSignupModal}
