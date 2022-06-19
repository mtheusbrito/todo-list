import React from 'react';

// import { Container } from './styles';
import styles from './index.module.css';
import logo from './../../assets/logo.svg'
const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <img src={logo} alt="" /> <span>to</span>
    </div>
  );
}

export default Header;