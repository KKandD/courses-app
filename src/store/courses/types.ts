export type CourseType = {
	id: string;
	title: string;
	description: string;
	creationDate: string;
	duration: number;
	authors: string[];
};

export interface UpdateCourseType {
	title: string;
	description: string;
	duration: number;
	authors: string[];
}

export const enum CoursesActionTypes {
	SAVE_COURSES = 'SAVE_COURSES',
	ADD_COURSE = 'ADD_COURSE',
	UPDATE_COURSE = 'UPDATE_COURSE',
	DELETE_COURSE = 'DELETE_COURSE',
}

export interface SaveCourses {
	type: CoursesActionTypes.SAVE_COURSES;
	payload: CourseType[];
}

export interface AddCourse {
	type: CoursesActionTypes.ADD_COURSE;
	payload: CourseType;
}

export interface UpdateCourse {
	type: CoursesActionTypes.UPDATE_COURSE;
	payload: { courseId: string; courseData: UpdateCourseType; token: string };
}

export interface DeleteCourse {
	type: CoursesActionTypes.DELETE_COURSE;
	payload: string;
}

export type CoursesAction =
	| SaveCourses
	| AddCourse
	| UpdateCourse
	| DeleteCourse;
