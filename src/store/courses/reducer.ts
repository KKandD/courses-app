import { CoursesActionTypes, CoursesAction, CourseType } from './types';

const coursesInitialState = [] as CourseType[];

export function coursesReducer(
	state = coursesInitialState,
	action: CoursesAction
) {
	switch (action.type) {
		case CoursesActionTypes.SAVE_COURSES:
			return action.payload;
		case CoursesActionTypes.ADD_COURSE:
			return [...state, action.payload];
		case CoursesActionTypes.DELETE_COURSE:
			return state.filter((course) => course.id !== action.payload);
		case CoursesActionTypes.UPDATE_COURSE:
			return state.map((course) =>
				course.id === action.payload.courseId
					? { ...course, ...action.payload.courseData }
					: course
			);
		default:
			return state;
	}
}
