import React from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import { mockedCoursesList } from 'src/constants';
import { Course, CoursesProps } from './Course.types';

const Courses: React.FC<CoursesProps> = (props) => {
	const handleShowCourse = (course: Course) => {
		console.log('Show course:', course);
	};

	const courses = props.courses;
	const authors = props.authors;

	return (
		<div className='courses-list'>
			<div>
				{courses.map((course) => (
					<CourseCard key={course.id} course={course} />
				))}
			</div>
		</div>
	);
};

export default Courses;
