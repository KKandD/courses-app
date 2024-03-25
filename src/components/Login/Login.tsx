import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { setUserAction } from '../../store/user/actions';
import { loginUser } from '../../services';
import { fetchCurrentUserThunk } from 'src/store/user/thunk';
import { useAppDispatch } from 'src/hooks';

const Login = () => {
	const [loginData, setLoginData] = useState({
		email: '',
		password: '',
	});

	const [validationErrors, setValidationErrors] = useState({
		email: '',
		password: '',
	});

	const [errorMessage, setErrorMessage] = useState('');
	const navigate = useNavigate();
	const appDispatch = useAppDispatch();

	const handleLogin = async (event) => {
		event.preventDefault();

		const errors = {
			email: loginData.email.trim() === '' ? 'Email is required' : '',
			password: loginData.password.trim() === '' ? 'Password is required' : '',
		};

		setValidationErrors(errors);

		if (Object.values(errors).some((error) => error !== '')) {
			return;
		}

		try {
			const result = await loginUser(loginData);

			appDispatch(setUserAction(result));

			if (result.successful) {
				localStorage.setItem('userToken', result.result);
				appDispatch(fetchCurrentUserThunk(result.result));
				navigate('/courses');
			} else {
				setErrorMessage('Invalid credentials. Please try again.');
			}
		} catch (error) {
			console.error('Login error:', error);
			setErrorMessage('An error occurred during login. Please try again.');
		}
	};

	return (
		<>
			<div className='d-flex align-items-center justify-content-center mt-5'>
				<div className='form-signin w-25 mt-5'>
					<form onSubmit={handleLogin}>
						<div className='text-center'>
							<h1 className='h3 mb-3 fw-normal'>Login</h1>
							{errorMessage && (
								<div className='text-danger'>{errorMessage}</div>
							)}
						</div>

						<div className='form-floating my-4'>
							<input
								type='email'
								className={`form-control ${validationErrors.email && 'is-invalid'}`}
								id='email'
								placeholder='name@example.com'
								value={loginData.email}
								onChange={(e) =>
									setLoginData({ ...loginData, email: e.target.value })
								}
							/>
							<label htmlFor='email'>Email address</label>
							<div className='text-danger'>{validationErrors.email}</div>
						</div>
						<div className='form-floating my-4'>
							<input
								type='password'
								className={`form-control ${validationErrors.password && 'is-invalid'}`}
								id='password'
								placeholder='Password'
								value={loginData.password}
								onChange={(e) =>
									setLoginData({ ...loginData, password: e.target.value })
								}
							/>
							<label htmlFor='password'>Password</label>
							<div className='text-danger'>{validationErrors.password}</div>
						</div>

						<button className='btn btn-primary w-100 py-2' type='submit'>
							Login
						</button>
					</form>
					<div className='text-center mt-4'>
						<p>
							If you don't have an account you may{' '}
							<Link to='/registration'>Registration</Link>
						</p>
						<p className='mt-5 mb-3 text-body-secondary'>© 2024</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
