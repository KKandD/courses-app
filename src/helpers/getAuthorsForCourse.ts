import { AuthorType } from 'src/store/authors/types';
import { CourseType } from 'src/store/courses/types';

export const getAuthorsForCourse = (
	course: CourseType,
	authors: AuthorType[]
): string => {
	return authors
		.filter((author) => course.authors.includes(author.id))
		.map((author) => author.name)
		.join(', ');
};
