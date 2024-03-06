import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import { mockedCoursesList, mockedAuthorsList } from './constants';
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

function App() {
	const navigate = useNavigate();
	const location = useLocation();
	const [isAuthenticated, setIsAuthenticated] = useState(
		!!localStorage.getItem('userToken')
	);

	useEffect(() => {
		const token = localStorage.getItem('userToken');

		if (!token && location.pathname !== '/registration') {
			navigate('/login');
		}
		setIsAuthenticated(!!token);
	}, [navigate, location.pathname]);

	return (
		<div className='container-xxl bd-gutter'>
			<Header name='Unicorn Courses' isAuthenticated={isAuthenticated} />
			<Routes>
				<Route
					path='/courses/*'
					element={
						mockedCoursesList.length === 0 ? (
							<EmptyCourseList />
						) : (
							<Courses
								courses={mockedCoursesList}
								authors={mockedAuthorsList}
							/>
						)
					}
				/>
				<Route
					path='/courses/:courseId'
					element={
						<CourseInfo
							courses={mockedCoursesList}
							authors={mockedAuthorsList}
						/>
					}
				/>
				<Route
					path='/courses/add'
					element={
						<CreateCourse
							courses={mockedCoursesList}
							authors={mockedAuthorsList}
						/>
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
