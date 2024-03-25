import { CoursesActionTypes, CourseType, UpdateCourse } from './types';

export const saveCoursesAction = (coursesData: CourseType[]) => ({
	type: CoursesActionTypes.SAVE_COURSES,
	payload: coursesData,
});

export const addNewCourseAction = (courseData: CourseType) => ({
	type: CoursesActionTypes.ADD_COURSE,
	payload: courseData,
});

export const updateCourseAction = (
	courseId: string,
	courseData: UpdateCourse,
	token: string
) => ({
	type: CoursesActionTypes.UPDATE_COURSE,
	payload: { courseId, courseData, token },
});

export const deleteCourseAction = (courseId: string) => ({
	type: CoursesActionTypes.DELETE_COURSE,
	payload: courseId,
});
