import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../providers/redux/hooks';
import {   setModalOpen } from '../../providers/slice/auth/authSlice';
import { FaUserCircle } from 'react-icons/fa';
import LoginModal from '../pages/LoginModal';
import { logoutThunk } from '../../providers/slice/auth/authThunks';

export default function NavBar(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, accessToken } = useAppSelector((state) => state.auth);

  const logoutHandler = (): void => {
    void dispatch(logoutThunk());
    navigate('/');
  };

  const openLoginModal = (): void => {
    void dispatch(setModalOpen());

  };

  return (
    <>
      <Navbar
        style={{
          height: '120px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Container>
          <Navbar.Brand href="/" style={{ fontSize: '24px', color: 'white' }}>
            {'JoJo_fit'}
          </Navbar.Brand>
          <Nav className="me-auto" style={{ fontSize: '18px' }}>
            <NavLink to="/тренировки" className="nav-link" style={{ color: 'white' }}>
              Тренировки
            </NavLink>
            {user && accessToken ? (
              <NavLink to="/login" className="nav-link" onClick={logoutHandler} style={{ color: 'white' }}>
                Выход
              </NavLink>
            ) : (
              <NavLink to="/signup" className="nav-link" style={{ color: 'white' }}>
                Зарегистрироваться
              </NavLink>
            )}
          </Nav>
          <Nav>
            <NavLink
              to="#"
              className="nav-link"
              style={{ color: 'white', display: 'flex', alignItems: 'center' }}
              onClick={openLoginModal}
            >
              <span style={{ marginRight: '8px' }}>Личный кабинет</span>
              <FaUserCircle size={24} />
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
      <LoginModal />
    </>
  );
}
