import React from 'react';
import Button from 'src/common/Button/Button';

const EmptyCourseList = () => {
	return (
		<div className='text-center'>
			<blockquote className='blockquote'>
				<p>Your List Is Empty</p>
			</blockquote>
			<p>Please use 'Add New Course' button to add your first course</p>
			<Button buttonText='add new course' />
		</div>
	);
};

export default EmptyCourseList;
