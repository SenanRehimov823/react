import React from 'react';
import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
  <div className={styles.container}>
    <div className={styles.logo}>
      <a href="#">colo<span>shop</span></a>
    </div>
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li><a href="#">home</a></li>
        <li><a href="#">shop</a></li>
        <li><a href="#">promotion</a></li>
        <li><a href="#">pages</a></li>
        <li><a href="#">blog</a></li>
        <li><a href="#">contact</a></li>
      </ul>
    </nav>
  </div>
</header>
	);
};

export default Header;
