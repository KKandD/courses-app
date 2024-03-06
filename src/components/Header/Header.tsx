import React, { useState, useEffect } from 'react';
import { HeaderProps } from './Header.types';
import Logo from '../Logo/Logo';
import Button from '../../common/Button/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC<HeaderProps> = (props) => {
	const navigate = useNavigate();
	const location = useLocation();

	const handleLogout = () => {
		localStorage.removeItem('userToken');
		navigate('/login');
	};

	const isLoginPage =
		location.pathname === '/login' || location.pathname === '/registration';

	return (
		<div className='container'>
			<header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom align-items-center'>
				<a
					href='/'
					className='d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none'
				>
					<Logo />
					<span className='fs-4'>{props.name}</span>
				</a>

				{!isLoginPage && (
					<ul className='nav nav-pills'>
						<li className='nav-item'>
							{props.isAuthenticated ? (
								<div className='d-flex align-items-center'>
									<p className='mb-0 me-3'>
										{localStorage.getItem('userName')}
									</p>
									<Button buttonText='Logout' onClick={handleLogout} />
								</div>
							) : (
								<Link to='/login'>
									<Button buttonText='Login' />
								</Link>
							)}
						</li>
					</ul>
				)}
			</header>
		</div>
	);
};

export default Header;
