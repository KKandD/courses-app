import React, { useEffect } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button from 'src/common/Button/Button';
import { getAuthorsForCourse } from 'src/helpers/getAuthorsForCourse';
import { Link } from 'react-router-dom';
import { RootState } from '../../store/rootReducer';
import { useSelector } from 'react-redux';
import { fetchCurrentUserThunk } from '../../store/user/thunk';
import { fetchCoursesThunk } from '../../../src/store/courses/thunk';
import { fetchAuthorsThunk } from '../../../src/store/authors/thunk';
import { useAppDispatch } from 'src/hooks';

const Courses = () => {
	const courses = useSelector((state: RootState) => state.courses);
	const authors = useSelector((state: RootState) => state.authors);
	const userRole = useSelector((state: RootState) => state.user.role);
	const appDispatch = useAppDispatch();

	useEffect(() => {
		appDispatch(fetchCoursesThunk());
		appDispatch(fetchAuthorsThunk());
	}, [appDispatch]);

	useEffect(() => {
		const token = localStorage.getItem('userToken');
		if (token) {
			appDispatch(fetchCurrentUserThunk(token));
		}
	}, [userRole]);

	return (
		<div className='courses-list'>
			<div className='row justify-content-between mt-5'>
				<div className='col-md-10'>
					<SearchBar />
				</div>
				<div className='col-md-2 d-flex justify-content-end'>
					{userRole === 'admin' && (
						<Link to='/courses/add'>
							<Button buttonText='Add New Course' />
						</Link>
					)}
				</div>
			</div>
			{courses.map((course) => (
				<CourseCard
					key={course.id}
					course={course}
					authors={getAuthorsForCourse(course, authors)}
				/>
			))}
		</div>
	);
};

export default Courses;
