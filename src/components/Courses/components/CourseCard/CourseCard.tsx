import React from 'react';
import { CourseCardProps } from './CourseCard.types';
import Button from 'src/common/Button/Button';

const CourseCard: React.FC<CourseCardProps> = (props) => {
	return (
		<div>
			<div>
				<div>{props.course.title}</div>
			</div>
			<div>
				<div>{props.course.description}</div>
				<div>{props.course.authors}</div>
				<div>{props.course.duration}</div>
				<div>{props.course.creationDate.toDateString()}</div>
				<Button buttonText='show course' />
			</div>
		</div>
	);
};

export default CourseCard;
