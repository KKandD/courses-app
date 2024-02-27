import React, { useState } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import { Course, CoursesProps } from './Course.types';
import SearchBar from './components/SearchBar/SearchBar';
import Button from 'src/common/Button/Button';
import CourseInfo from '../CourseInfo/CourseInfo';

const Courses: React.FC<CoursesProps> = (props) => {
	const courses = props.courses;
	const authors = props.authors;

	const [viewCourseInfo, setViewCourseInfo] = useState(false);
	const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

	const switchView = (course: Course | null = null) => {
		if (course) {
			// Show CourseInfo for the selected course
			setViewCourseInfo(true);
			setSelectedCourse(course);
		} else {
			// Go back to CourseCard list
			setViewCourseInfo(false);
			setSelectedCourse(null);
		}
	};

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
			{viewCourseInfo ? (
				<CourseInfo
					course={selectedCourse}
					authors={getAuthorsForCourse(selectedCourse)}
					onBack={() => switchView()}
				/>
			) : (
				courses.map((course) => (
					<CourseCard
						key={course.id}
						course={course}
						authors={getAuthorsForCourse(course)}
						onViewDetails={() => switchView(course)}
					/>
				))
			)}
		</div>
	);
};

export default Courses;
