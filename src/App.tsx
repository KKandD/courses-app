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
import CreateCourse from './components/CreateCourse/CreateCourse';
import { saveCoursesAction } from '../src/store/courses/actions';
import { saveAuthorsAction } from '../src/store/authors/actions';
import { useDispatch } from 'react-redux';
import { fetchCourses, fetchAuthors } from '../src/services';
import { RootState } from '../src/store/rootReducer';

function App() {
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch();
	const [isAuthenticated, setIsAuthenticated] = useState(
		!!localStorage.getItem('userToken')
	);

	useEffect(() => {
		fetchCourses()
			.then((coursesData) => dispatch(saveCoursesAction(coursesData)))
			.catch((error) => console.error('Error fetching courses:', error));

		fetchAuthors()
			.then((authorsData) => dispatch(saveAuthorsAction(authorsData)))
			.catch((error) => console.error('Error fetching authors:', error));
	}, [dispatch]);

	useEffect(() => {
		const token = localStorage.getItem('userToken');
		console.log('token: ' + token);

		if (!token && location.pathname !== '/registration') {
			navigate('/login');
		}
		setIsAuthenticated(!!token);
	}, [navigate, location.pathname]);

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
				<Route path='/courses/add' element={<CreateCourse />} />
				<Route path='/login' element={<Login />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='*' element={<Navigate to='/courses' />} />
			</Routes>
		</div>
	);
}

export default App;
