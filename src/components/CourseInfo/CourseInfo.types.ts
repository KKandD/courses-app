import { AuthorType } from 'src/store/authors/types';
import { CourseType } from 'src/store/courses/types';

export interface CourseInfoProps {
	courses: CourseType[];
	authors: AuthorType[];
}
