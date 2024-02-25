import React, { useEffect } from 'react';
import styles from './Header.module.css';
import { HeaderProps } from './Header.types';
import Logo from '../Logo/Logo';
import Button from '../../common/Button/Button';

const Header: React.FC<HeaderProps> = (props) => {
	return (
		<header className={styles.header}>
			<Logo />
			<span>{props.name}</span>
			<Button buttonText='Logout' />
		</header>
	);
};

export default Header;
