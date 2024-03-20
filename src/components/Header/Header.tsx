import React from 'react';
import Logo from '../Logo/Logo';
import Button from '../../common/Button/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserAction } from '../../store/user/actions';
import { RootState } from '../../store/rootReducer';
import { logoutUser } from '../../services';

interface HeaderProps {
	isAuthenticated: boolean;
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch();
	const user = useSelector((state: RootState) => state.user);

	const handleLogout = async () => {
		try {
			await logoutUser(user.token);
			dispatch(logoutUserAction());
			localStorage.removeItem('userToken');
			navigate('/login');
		} catch (error) {
			console.error('Logout error:', error);
		}
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
					<span className='fs-4'>Unicorn Courses</span>
				</a>

				{!isLoginPage && (
					<ul className='nav nav-pills'>
						<li className='nav-item'>
							{isAuthenticated ? (
								<div className='d-flex align-items-center'>
									<p className='mb-0 me-3'>{user.name}</p>
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
