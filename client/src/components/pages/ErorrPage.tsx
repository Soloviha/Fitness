import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../css/Erorr.module.css';

export default function ErorrPage(): React.JSX.Element {
  return (
    <div className={styles.error_container}>
      <NavLink to="/">
        <img className={styles.img} src="../../../public/error.png" alt="Ошибка" />
      </NavLink>
    </div>
  );
}
