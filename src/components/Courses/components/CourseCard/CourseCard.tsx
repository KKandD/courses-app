import React from 'react';
import { useSelector } from 'react-redux';
import { CourseCardProps } from './CourseCard.types';
import Button from 'src/common/Button/Button';
import { Link } from 'react-router-dom';
import { getCourseDuration } from 'src/helpers/getCourseDuration';
import { RootState } from '../../../../store/rootReducer';
import { deleteCourseThunk } from '../../../../store/courses/thunk';
import { useAppDispatch } from 'src/hooks';

const CourseCard: React.FC<CourseCardProps> = (props) => {
	const formattedDuration = getCourseDuration(props.course.duration);
	const user = useSelector((state: RootState) => state.user);
	const appDispatch = useAppDispatch();

	const handleDeleteCourse = () => {
		appDispatch(deleteCourseThunk(props.course.id, user.token));
	};

	return (
		<div className='card my-5' data-testid='course-card'>
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
							{user.role === 'admin' && (
								<div>
									<Button
										buttonText='Delete'
										onClick={handleDeleteCourse}
										className='mx-2 btn-danger'
									/>
									<Link
										to={`/courses/update/${props.course.id}`}
										className='mx-2'
									>
										<Button buttonText='Update' className='mx-2 btn-warning' />
									</Link>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
