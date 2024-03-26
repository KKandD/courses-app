import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import Courses from '../Courses';
import { Provider } from 'react-redux';
import store from '../../../store/index';
import { BrowserRouter, useNavigate } from 'react-router-dom';

const mockCourses = [
	{
		id: 1,
		title: 'Course 1',
		description: 'Description for Course 1',
		duration: 60,
		creationDate: '2024-03-25',
		authors: ['id1', 'id2'],
	},
	{
		id: 2,
		title: 'Course 2',
		description: 'Description for Course 2',
		duration: 90,
		creationDate: '2024-03-26',
		authors: ['id1', 'id3'],
	},
];

const mockAuthors = [
	{
		id: 'id1',
		name: 'name1',
	},
	{
		id: 'id2',
		name: 'name2',
	},
	{
		id: 'id3',
		name: 'name3',
	},
];

const user = {
	name: 'user',
	role: 'admin',
	token: 'token',
};

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: jest.fn(),
}));

describe('Courses component', () => {
	store.getState = () => ({
		courses: mockCourses,
		authors: mockAuthors,
		user: user,
	});

	test('displays correct number of CourseCard components', () => {
		const { getAllByTestId } = render(
			<Provider store={store}>
				<BrowserRouter>
					{' '}
					<Courses />
				</BrowserRouter>
			</Provider>
		);

		const courseCards = getAllByTestId('course-card');
		expect(courseCards.length).toBe(mockCourses.length);
	});

	test('displays CourseForm after clicking on "Add New Course" button', async () => {
		const navigate = jest.fn();
		useNavigate.mockReturnValue(navigate);
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Courses />
				</BrowserRouter>
			</Provider>
		);

		const addNewCourseButton = screen.getByText('Add New Course');
		fireEvent.click(addNewCourseButton);

		expect(navigate).toHaveBeenCalledWith('/courses/add');
	});
});
