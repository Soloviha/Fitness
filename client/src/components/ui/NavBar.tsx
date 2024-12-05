import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../providers/redux/hooks';
import { logoutThunk } from '../../providers/slice/auth/authThunks';

export default function NavBar(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user?.name);

  const logoutHandler = (): void => {
    void dispatch(logoutThunk());
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">{user ?? 'Рестораны'}</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/types" className="nav-link">
            type
          </NavLink>
          {user ? (
            <>
              <NavLink to="/rests/new" className="nav-link">
                Добавить ресторан
              </NavLink>
              <NavLink to="/login" className="nav-link" onClick={logoutHandler}>
                Выход
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/signup" className="nav-link">
                Зарегистрироваться
              </NavLink>

              <NavLink to="/login" className="nav-link">
                Вход
              </NavLink>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
