import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import CourseCard from '../CourseCard';
import store from '../../../../../store/index';

const mockCourse = {
	title: 'Test Course',
	description: 'This is a test course.',
	duration: 90,
	creationDate: '2024-03-25',
};

const authors = 'Author 1, Author 2';

describe('CourseCard component', () => {
	test('displays title', () => {
		const { getByText } = render(
			<Provider store={store}>
				<Router>
					<CourseCard course={mockCourse} authors={authors} />
				</Router>
			</Provider>
		);
		expect(getByText('Test Course')).toBeInTheDocument();
	});

	test('displays description', () => {
		const { getByText } = render(
			<Provider store={store}>
				<Router>
					<CourseCard course={mockCourse} authors={authors} />
				</Router>
			</Provider>
		);
		expect(getByText('This is a test course.')).toBeInTheDocument();
	});

	test('displays duration in the correct format', () => {
		const { getByText } = render(
			<Provider store={store}>
				<Router>
					<CourseCard course={mockCourse} authors={authors} />
				</Router>
			</Provider>
		);
		expect(getByText('01:30 hour')).toBeInTheDocument();
	});

	test('displays authors list', () => {
		const { getByText } = render(
			<Provider store={store}>
				<Router>
					<CourseCard course={mockCourse} authors={authors} />
				</Router>
			</Provider>
		);
		expect(getByText('Author 1, Author 2')).toBeInTheDocument();
	});

	test('displays creation date in the correct format', () => {
		const { getByText } = render(
			<Provider store={store}>
				<Router>
					<CourseCard course={mockCourse} authors={authors} />
				</Router>
			</Provider>
		);
		expect(getByText('2024-03-25')).toBeInTheDocument();
	});
});
