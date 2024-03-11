import React from 'react';
import { useDispatch } from 'react-redux';
import { CourseCardProps } from './CourseCard.types';
import Button from 'src/common/Button/Button';
import { Link } from 'react-router-dom';
import { getCourseDuration } from 'src/helpers/getCourseDuration';
import { deleteCourseAction } from '../../../../store/courses/actions';

const CourseCard: React.FC<CourseCardProps> = (props) => {
	const dispatch = useDispatch();
	const formattedDuration = getCourseDuration(props.course.duration);

	const handleDeleteCourse = () => {
		dispatch(deleteCourseAction(props.course.id));
	};

	// The Update button has no functionality in this module, it will be added in the next module

	return (
		<div className='card my-5'>
			<div className='card-header'>
				<h5>{props.course.title}</h5>
			</div>
			<div className='card-body'>
				<div className='row'>
					<div className='col-md-8'>
						<p className='card-text'>{props.course.description}</p>
					</div>
					<div className='col-md-4'>
						<ul className='list-group list-group-flush'>
							<li className='list-group-item'>
								<strong>Authors: </strong>
								{props.authors}
							</li>
							<li className='list-group-item'>
								<strong>Duration: </strong>
								{formattedDuration}
							</li>
							<li className='list-group-item'>
								<strong>Creation Date: </strong>
								{props.course.creationDate}
							</li>
						</ul>
						<div className='d-flex mt-3'>
							<Link to={`/courses/${props.course.id}`} className='mx-2'>
								<Button buttonText='Show Course' />
							</Link>
							<Button
								buttonText='Delete'
								onClick={handleDeleteCourse}
								className='mx-2 btn-danger'
							/>
							<Button buttonText='Update' className='mx-2 btn-warning' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
