import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Registration = () => {
	const [newUser, setNewUser] = useState({
		name: '',
		password: '',
		email: '',
	});

	const [validationErrors, setValidationErrors] = useState({
		name: '',
		password: '',
		email: '',
	});

	const [errorMessage, setErrorMessage] = useState('');
	const navigate = useNavigate();

	const handleRegistration = async (event) => {
		event.preventDefault();

		const errors = {
			name: newUser.name.trim() === '' ? 'Name is required' : '',
			email: newUser.email.trim() === '' ? 'Email is required' : '',
			password: newUser.password.trim() === '' ? 'Password is required' : '',
		};

		setValidationErrors(errors);

		if (Object.values(errors).some((error) => error !== '')) {
			return;
		}

		try {
			const response = await fetch('http://localhost:4000/register', {
				method: 'POST',
				body: JSON.stringify(newUser),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const result = await response.json();

			if (result.successful) {
				navigate('/login');
			} else {
				setErrorMessage(
					'An error occured while creating an account. Try again'
				);
			}
		} catch (error) {
			console.error('Registration error:', error);
		}
	};

	return (
		<>
			<div className='d-flex align-items-center justify-content-center mt-5'>
				<div className='form-signin w-25 mt-5'>
					<form onSubmit={handleRegistration}>
						<div className='text-center'>
							<h1 className='h3 mb-3 fw-normal'>Registration</h1>
							{errorMessage && (
								<div className='text-danger'>{errorMessage}</div>
							)}
						</div>

						<div className='form-floating my-4'>
							<input
								type='text'
								className={`form-control ${validationErrors.name && 'is-invalid'}`}
								id='name'
								placeholder='Name'
								value={newUser.name}
								onChange={(e) =>
									setNewUser({ ...newUser, name: e.target.value })
								}
							/>
							<label htmlFor='name'>Name</label>
							<div className='text-danger'>{validationErrors.name}</div>
						</div>
						<div className='form-floating my-4'>
							<input
								type='email'
								className={`form-control ${validationErrors.email && 'is-invalid'}`}
								id='email'
								placeholder='name@example.com'
								value={newUser.email}
								onChange={(e) =>
									setNewUser({ ...newUser, email: e.target.value })
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
								value={newUser.password}
								onChange={(e) =>
									setNewUser({ ...newUser, password: e.target.value })
								}
							/>
							<label htmlFor='password'>Password</label>
							<div className='text-danger'>{validationErrors.password}</div>
						</div>

						<button className='btn btn-primary w-100 py-2' type='submit'>
							Register
						</button>
					</form>
					<div className='text-center mt-4'>
						<p>
							If you have an account you may <Link to='/login'>Login</Link>
						</p>
						<p className='mt-5 mb-3 text-body-secondary'>© 2024</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Registration;
