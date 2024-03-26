import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import store from '../../../store/index';

const user = {
	name: 'John Doe',
};

describe('Header component', () => {
	test('renders logo and user name when authenticated', () => {
		store.getState().user = user;

		const { getByText } = render(
			<Provider store={store}>
				<Router>
					{' '}
					<Header isAuthenticated={true} />
				</Router>
			</Provider>
		);

		// Check if logo is rendered
		expect(getByText('Unicorn Courses')).toBeInTheDocument();

		// Check if user name is rendered
		expect(getByText('John Doe')).toBeInTheDocument();
	});

	test('does not render user name when not authenticated', () => {
		const { queryByText } = render(
			<Provider store={store}>
				<Router>
					{' '}
					<Header isAuthenticated={false} />
				</Router>
			</Provider>
		);

		// Check if logo is rendered
		expect(queryByText('Unicorn Courses')).toBeInTheDocument();

		// Check if user name is not rendered
		expect(queryByText('John Doe')).toBeNull();
	});
});
