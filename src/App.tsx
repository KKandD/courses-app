import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import EmptyCourseList from './components/EmptyCourseList/EmptyCourseList';
import Courses from './components/Courses/Courses';
import {
	Routes,
	Route,
	Navigate,
	useNavigate,
	useLocation,
} from 'react-router-dom';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import CourseInfo from './components/CourseInfo/CourseInfo';
import CourseForm from './components/CourseForm/CourseForm';
import { useSelector } from 'react-redux';
import { RootState } from '../src/store/rootReducer';
import { fetchCurrentUserThunk } from './store/user/thunk';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { useAppDispatch } from './hooks';

function App() {
	const navigate = useNavigate();
	const location = useLocation();
	const appDispatch = useAppDispatch();
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const courses = useSelector((state: RootState) => state.courses);
	const user = useSelector((state: RootState) => state.user);

	useEffect(() => {
		if (user.token) {
			setIsAuthenticated(true);
			appDispatch(fetchCurrentUserThunk(user.token));
		} else {
			setIsAuthenticated(false);
			if (location.pathname !== '/registration') {
				navigate('/login');
			}
		}
	}, [user.token]);

	// useEffect(() => {
	// 	if (isAuthenticated && user.name && user.email && user.role) {
	// 		navigate('/courses');
	// 	}
	// }, [isAuthenticated, user, navigate]);

	return (
		<div className='container-xxl bd-gutter'>
			<Header isAuthenticated={isAuthenticated} />
			<Routes>
				<Route
					path='/courses/*'
					element={courses.length === 0 ? <EmptyCourseList /> : <Courses />}
				/>
				<Route path='/courses/:courseId' element={<CourseInfo />} />
				<Route
					path='/courses/update/:courseId'
					element={
						<PrivateRoute>
							<CourseForm />
						</PrivateRoute>
					}
				/>
				<Route
					path='/courses/add'
					element={
						<PrivateRoute>
							<CourseForm />
						</PrivateRoute>
					}
				/>
				<Route path='/login' element={<Login />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='*' element={<Navigate to='/courses' />} />
			</Routes>
		</div>
	);
}

export default App;
