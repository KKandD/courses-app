import { Author, Course } from '../Courses/Course.types';

export interface CourseInfoProps {
	course: Course;
	authors: string;
	onBack: () => void;
}
