import React from 'react';
import Button from 'src/common/Button/Button';
import { Link, useParams } from 'react-router-dom';
import { getCourseDuration } from 'src/helpers/getCourseDuration';
import { getAuthorsForCourse } from 'src/helpers/getAuthorsForCourse';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';

const CourseInfo = () => {
	const { courseId } = useParams();
	const courses = useSelector((state: RootState) => state.courses);
	const authors = useSelector((state: RootState) => state.authors);

	const course = courses.find((c) => c.id === courseId);
	const formattedDuration = getCourseDuration(course.duration);

	return (
		<div className='container mt-4'>
			<div className='row'>
				<div className='col-md-8'>
					<h2 className='fw-bold'>{course.title}</h2>
				</div>
			</div>
			<div className='card border-secondary mt-3'>
				<div className='card-body'>
					<div className='row'>
						<div className='col-md-8'>
							<h5 className='card-title fw-bold'>Description:</h5>
							<p className='card-text'>{course.description}</p>
						</div>
						<div className='col-md-4 border-start'>
							<div className='row'>
								<div className='col-md-12'>
									<p>
										<strong>ID: </strong>
										{course.id}
									</p>
								</div>
								<div className='col-md-12'>
									<p>
										<strong>Duration: </strong>
										{formattedDuration}
									</p>
								</div>
								<div className='col-md-12'>
									<p>
										<strong>Created: </strong>
										{course.creationDate}
									</p>
								</div>
								<div className='col-md-12'>
									<p>
										<strong>Authors: </strong>
										{getAuthorsForCourse(course, authors)}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='row mt-3'>
				<div className='col-md-12 d-flex justify-content-end'>
					<Link to='/courses'>
						<Button buttonText='Back' />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CourseInfo;
