import { coursesReducer } from '../courses/reducer';
import { CoursesActionTypes } from '../courses/types';

test('should return the initial state', () => {
	expect(coursesReducer(undefined, { type: 'unknown' })).toEqual([]);
});

test('should handle saving courses', () => {
	const courses = [
		{ id: 1, name: 'Course 1' },
		{ id: 2, name: 'Course 2' },
	];
	const action = { type: CoursesActionTypes.SAVE_COURSES, payload: courses };

	expect(coursesReducer([], action)).toEqual(courses);
});

test('should handle adding a course', () => {
	const initialState = [{ id: 1, name: 'Course 1' }];
	const newCourse = { id: 2, name: 'Course 2' };
	const action = { type: CoursesActionTypes.ADD_COURSE, payload: newCourse };

	expect(coursesReducer(initialState, action)).toEqual([
		...initialState,
		newCourse,
	]);
});

test('should handle deleting a course', () => {
	const initialState = [
		{ id: 1, name: 'Course 1' },
		{ id: 2, name: 'Course 2' },
	];
	const courseIdToDelete = 1;
	const action = {
		type: CoursesActionTypes.DELETE_COURSE,
		payload: courseIdToDelete,
	};

	expect(coursesReducer(initialState, action)).toEqual([
		{ id: 2, name: 'Course 2' },
	]);
});

test('should handle updating a course', () => {
	const initialState = [
		{ id: 1, name: 'Course 1' },
		{ id: 2, name: 'Course 2' },
	];
	const updatedCourse = {
		courseId: 1,
		courseData: { name: 'Updated Course 1' },
	};
	const action = {
		type: CoursesActionTypes.UPDATE_COURSE,
		payload: updatedCourse,
	};

	expect(coursesReducer(initialState, action)).toEqual([
		{ id: 1, name: 'Updated Course 1' },
		{ id: 2, name: 'Course 2' },
	]);
});
