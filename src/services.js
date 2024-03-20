const BASE_URL = 'http://localhost:4000';

export const addNewCourse = async (courseData, token) => {
	try {
		const response = await fetch(`${BASE_URL}/courses/add`, {
			method: 'POST',
			headers: {
				Authorization: token,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(courseData),
		});
		const data = await response.json();

		if (data.successful) {
			return data.result;
		} else {
			throw new Error('Failed to add new course');
		}
	} catch (error) {
		console.error('Error adding new course:', error);
		throw error;
	}
};

export const updateCourse = async (courseId, courseData, token) => {
	try {
		const response = await fetch(`${BASE_URL}/courses/${courseId}`, {
			method: 'PUT',
			headers: {
				Authorization: token,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(courseData),
		});

		if (response.ok) {
			const data = await response.json();
			if (data.successful) {
				return data;
			} else {
				throw new Error('Failed to update course');
			}
		} else {
			throw new Error(`Failed to update course: ${response.statusText}`);
		}
	} catch (error) {
		console.error('Error adding new course:', error);
		throw error;
	}
};

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

export const deleteCourse = async (courseId, token) => {
	try {
		const response = await fetch(`${BASE_URL}/courses/${courseId}`, {
			method: 'DELETE',
			headers: {
				Authorization: token,
				'Content-Type': 'application/json',
			},
		});

		if (response.ok) {
			const data = await response.json();
			if (data.successful) {
				return data;
			} else {
				throw new Error('Failed to delete course');
			}
		} else {
			throw new Error(`Failed to delete course: ${response.statusText}`);
		}
	} catch (error) {
		console.error('Error deleting course:', error);
		throw error;
	}
};

export const addNewAuthor = async (authorData, token) => {
	try {
		const response = await fetch(`${BASE_URL}/authors/add`, {
			method: 'POST',
			headers: {
				Authorization: token,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(authorData),
		});
		const data = await response.json();

		if (data.successful) {
			return data.result;
		} else {
			throw new Error('Failed to add author');
		}
	} catch (error) {
		console.error('Error adding author:', error);
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

export const fetchCurrentUser = async (token) => {
	try {
		const response = await fetch(`${BASE_URL}/users/me`, {
			headers: {
				Authorization: token,
				'Content-Type': 'application/json',
			},
		});

		const data = await response.json();

		if (data.successful) {
			return data;
		} else {
			throw new Error('Failed to fetch current user');
		}
	} catch (error) {
		console.error('Error fetching current user:', error);
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

export const logoutUser = async (token) => {
	try {
		const response = await fetch(`${BASE_URL}/logout`, {
			method: 'DELETE',
			headers: {
				Authorization: token,
				'Content-Type': 'application/json',
			},
		});

		if (response.status === 200) {
			return { successful: true };
		} else {
			throw new Error(`Failed to logout: ${response.statusText}`);
		}
	} catch (error) {
		console.error('Error during logout:', error);
		throw new Error('An error occurred during logout');
	}
};
