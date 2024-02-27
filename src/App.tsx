import React from 'react';
import Header from './components/Header/Header';
import { mockedCoursesList, mockedAuthorsList } from './constants';
import EmptyCourseList from './components/EmptyCourseList/EmptyCourseList';
import Courses from './components/Courses/Courses';

function App() {
	return (
		<div className='container-xxl bd-gutter'>
			<Header name='Unicorn Courses' />
			{mockedCoursesList.length === 0 ? (
				<EmptyCourseList />
			) : (
				<Courses courses={mockedCoursesList} authors={mockedAuthorsList} />
			)}
		</div>
	);
}

export default App;
