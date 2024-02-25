export interface CoursesProps {
	courses: Course[];
	authors: Author[];
}

export interface Course {
	id: string;
	title: string;
	description: string;
	duration: string;
	creationDate: Date;
	authors: string[];
}

export interface Author {
	id: string;
	name: string;
}
