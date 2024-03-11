import { CoursesActionTypes, CourseType } from './types';

export const addNewCourseAction = (courseData: CourseType) => ({
	type: CoursesActionTypes.ADD_COURSE,
	// payload: CourseValues;
	payload: courseData,
});

export const saveCoursesAction = (coursesData: CourseType[]) => ({
	type: CoursesActionTypes.SAVE_COURSES,
	payload: coursesData,
});

export const deleteCourseAction = (courseId: string) => ({
	type: CoursesActionTypes.DELETE_COURSE,
	payload: courseId,
});
