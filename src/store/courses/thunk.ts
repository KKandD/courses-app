import {
	fetchCourses,
	deleteCourse,
	addNewCourse,
	updateCourse,
} from '../../services';
import { saveCoursesAction } from './actions';
import { Dispatch } from 'redux';
import { CoursesActionTypes, CoursesAction, UpdateCourseType } from './types';

export const addNewCourseThunk = (courseData, token: string) => {
	return async (dispatch: Dispatch<CoursesAction>) => {
		try {
			const newCourse = await addNewCourse(courseData, token);
			dispatch({
				type: CoursesActionTypes.DELETE_COURSE,
				payload: newCourse,
				token,
			});
		} catch (error) {
			console.error('Error adding new course:', error);
		}
	};
};

export const updateCourseThunk = (
	courseId: string,
	courseData: UpdateCourseType,
	token: string
) => {
	return async (dispatch: Dispatch<CoursesAction>) => {
		try {
			await updateCourse(courseId, courseData, token);
			dispatch({
				type: CoursesActionTypes.UPDATE_COURSE,
				payload: { courseId, courseData, token },
			});
		} catch (error) {
			console.error('Error updating course:', error);
		}
	};
};

export const fetchCoursesThunk = () => async (dispatch) => {
	try {
		const coursesData = await fetchCourses();
		dispatch(saveCoursesAction(coursesData));
	} catch (error) {
		console.error('Error fetching courses:', error);
	}
};

export const deleteCourseThunk = (courseId: string, token: string) => {
	return async (dispatch: Dispatch<CoursesAction>) => {
		try {
			await deleteCourse(courseId, token);
			dispatch({ type: CoursesActionTypes.DELETE_COURSE, payload: courseId });
		} catch (error) {
			console.error('Error deleting course:', error);
		}
	};
};
