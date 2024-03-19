import { AuthorType } from 'src/store/authors/types';
import { CourseType } from 'src/store/courses/types';

export interface CoursesProps {
	courses: CourseType[];
	authors: AuthorType[];
}

export interface Course {
	id: string;
	title: string;
	description: string;
	duration: number;
	creationDate: string;
	authors: string[];
}
