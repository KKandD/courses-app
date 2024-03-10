import { Author, Course } from 'src/components/Courses/Course.types';

export const getAuthorsForCourse = (
	course: Course,
	authors: Author[]
): string => {
	return authors
		.filter((author) => course.authors.includes(author.id))
		.map((author) => author.name)
		.join(', ');
};
