import React from 'react';
import { CourseCardProps } from './CourseCard.types';
import Button from 'src/common/Button/Button';

export const formatDuration = (duration) => {
	const hours = Math.floor(duration / 60);
	const minutes = duration % 60;

	const formattedHours = hours < 10 ? '0' + hours : hours;
	const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

	if (hours === 1) {
		return `${formattedHours}:${formattedMinutes} hour`;
	} else {
		return `${formattedHours}:${formattedMinutes} hours`;
	}
};

const CourseCard: React.FC<CourseCardProps> = (props) => {
	const formattedDuration = formatDuration(props.course.duration);

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
						<Button buttonText='Show Course' onClick={props.onViewDetails} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
