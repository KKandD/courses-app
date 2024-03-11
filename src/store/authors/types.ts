export type AuthorType = {
	id: string;
	name: string;
};

export const enum AuthorsActionTypes {
	SAVE_AUTHORS = 'SAVE_AUTHORS',
	ADD_AUTHOR = 'ADD_AUTHOR',
	DELETE_AUTHOR = 'DELETE_AUTHOR',
}

interface SaveAuthors {
	type: AuthorsActionTypes.SAVE_AUTHORS;
	payload: AuthorType[];
}

interface AddAuthor {
	type: AuthorsActionTypes.ADD_AUTHOR;
	payload: AuthorType;
}

interface DeleteAuthor {
	type: AuthorsActionTypes.DELETE_AUTHOR;
	payload: string;
}

export type AuthorsAction = SaveAuthors | AddAuthor | DeleteAuthor;
