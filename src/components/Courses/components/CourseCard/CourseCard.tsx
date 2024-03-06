import React from 'react';
import { CourseCardProps } from './CourseCard.types';
import Button from 'src/common/Button/Button';
import { Link } from 'react-router-dom';
import { getCourseDuration } from 'src/helpers/getCourseDuration';

const CourseCard: React.FC<CourseCardProps> = (props) => {
	const formattedDuration = getCourseDuration(props.course.duration);

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
						<Link to={`/courses/${props.course.id}`}>
							<Button buttonText='Show Course' />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
