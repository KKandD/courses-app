import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import { mockedCoursesList } from './constants';
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
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoursesThunk } from '../src/store/courses/thunk';
import { fetchAuthorsThunk } from '../src/store/authors/thunk';
import { RootState } from '../src/store/rootReducer';
import store from '../src/store/index.js';
import { fetchCurrentUserThunk } from './store/user/thunk';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch();
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const user = useSelector((state: RootState) => state.user);

	useEffect(() => {
		//store.dispatch(fetchCoursesThunk());
		//store.dispatch(fetchAuthorsThunk());
		//store.dispatch(fetchCurrentUserThunk());
	}, [dispatch]);

	useEffect(() => {
		if (user.token) {
			setIsAuthenticated(true);
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
					element={
						mockedCoursesList.length === 0 ? <EmptyCourseList /> : <Courses />
					}
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
