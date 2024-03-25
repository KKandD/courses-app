import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Button from 'src/common/Button/Button';
import { RootState } from '../../../src/store/rootReducer';
import { Link } from 'react-router-dom';
import { fetchAuthorsThunk } from '../../../src/store/authors/thunk';
import { useAppDispatch } from 'src/hooks';

const EmptyCourseList = () => {
	const userRole = useSelector((state: RootState) => state.user.role);
	const appDispatch = useAppDispatch();

	useEffect(() => {
		appDispatch(fetchAuthorsThunk());
	}, [appDispatch]);

	const renderButtonOrMessage = () => {
		if (userRole === 'admin') {
			return (
				<Link to='/courses/add'>
					<Button buttonText='Add New Course' />
				</Link>
			);
		} else {
			return (
				<p>
					You don't have permissions to create a course. Please log in as ADMIN.
				</p>
			);
		}
	};

	return (
		<div className='text-center'>
			<blockquote className='blockquote'>
				<p>Your List Is Empty</p>
			</blockquote>
			<p>Please use the following options:</p>
			{renderButtonOrMessage()}
		</div>
	);
};

export default EmptyCourseList;
