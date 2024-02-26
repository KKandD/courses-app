import React from 'react';
import Button from 'src/common/Button/Button';
import { CourseInfoProps } from './CourseInfo.types';

const CourseInfo: React.FC<CourseInfoProps> = (props) => {
	return (
		<div className='container mt-4'>
			<div className='row'>
				<div className='col-md-8'>
					<h2 className='fw-bold'>{props.course.title}</h2>
				</div>
			</div>
			<div className='card border-secondary mt-3'>
				<div className='card-body'>
					<div className='row'>
						<div className='col-md-8'>
							<h5 className='card-title fw-bold'>Description:</h5>
							<p className='card-text'>{props.course.description}</p>
						</div>
						<div className='col-md-4 border-start'>
							<div className='row'>
								<div className='col-md-12'>
									<p>
										<strong>ID: </strong>
										{props.course.id}
									</p>
								</div>
								<div className='col-md-12'>
									<p>
										<strong>Duration: </strong>
										{props.course.duration}
									</p>
								</div>
								<div className='col-md-12'>
									<p>
										<strong>Created: </strong>
										{props.course.creationDate}
									</p>
								</div>
								<div className='col-md-12'>
									<p>
										<strong>Authors: </strong>
										{props.authors}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='row mt-3'>
				<div className='col-md-12 d-flex justify-content-end'>
					<Button buttonText='Back' />
				</div>
			</div>
		</div>
	);
};

export default CourseInfo;
