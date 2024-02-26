import React from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import { Author, Course, CoursesProps } from './Course.types';
import SearchBar from './components/SearchBar/SearchBar';
import Button from 'src/common/Button/Button';
import CourseInfo from '../CourseInfo/CourseInfo';

const Courses: React.FC<CoursesProps> = (props) => {
	const handleShowCourse = (course: Course) => {
		console.log('Show course:', course);
	};

	const courses = props.courses;
	const authors = props.authors;

	const course0 = props.courses[0];

	const getAuthorsForCourse = (course: Course): string => {
		return authors
			.filter((author) => course.authors.includes(author.id))
			.map((author) => author.name)
			.join(', ');
	};

	return (
		<div className='courses-list'>
			<div className='row justify-content-between mt-5'>
				<div className='col-md-10'>
					<SearchBar />
				</div>
				<div className='col-md-2 d-flex justify-content-end'>
					<Button buttonText='Add New Course' />
				</div>
			</div>
			<div>
				<CourseInfo course={course0} authors={getAuthorsForCourse(course0)} />
			</div>
			{courses.map((course) => (
				<CourseCard
					key={course.id}
					course={course}
					authors={getAuthorsForCourse(course)}
				/>
			))}
		</div>
	);
};

export default Courses;
