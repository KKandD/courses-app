const BASE_URL = 'http://localhost:4000';

export const fetchCourses = async () => {
	try {
		const response = await fetch(`${BASE_URL}/courses/all`);
		const data = await response.json();

		if (data.successful) {
			return data.result;
		} else {
			throw new Error('Failed to fetch courses');
		}
	} catch (error) {
		console.error('Error fetching courses:', error);
		throw error;
	}
};

export const fetchAuthors = async () => {
	try {
		const response = await fetch(`${BASE_URL}/authors/all`);
		const data = await response.json();

		if (data.successful) {
			return data.result;
		} else {
			throw new Error('Failed to fetch authors');
		}
	} catch (error) {
		console.error('Error fetching authors:', error);
		throw error;
	}
};

export const loginUser = async (loginData) => {
	try {
		const response = await fetch(`${BASE_URL}/login`, {
			method: 'POST',
			body: JSON.stringify(loginData),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const result = await response.json();

		if (result.successful) {
			return result;
		} else {
			throw new Error('Invalid credentials');
		}
	} catch (error) {
		console.error('Login error:', error);
		throw new Error('An error occurred during login');
	}
};

export const registerUser = async (newUser) => {
	try {
		const response = await fetch(`${BASE_URL}/register`, {
			method: 'POST',
			body: JSON.stringify(newUser),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const result = await response.json();

		if (result.successful) {
			return result;
		} else {
			throw new Error(
				'An error occurred while creating an account. Try again.'
			);
		}
	} catch (error) {
		console.error('Registration error:', error);
		throw new Error('An error occurred during registration.');
	}
};
