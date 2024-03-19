import { AuthorsActionTypes, AuthorType } from './types';

export const addNewAuthorAction = (authorData: AuthorType) => ({
	type: AuthorsActionTypes.ADD_AUTHOR,
	payload: authorData,
});

export const saveAuthorsAction = (authorsData: AuthorType[]) => ({
	type: AuthorsActionTypes.SAVE_AUTHORS,
	payload: authorsData,
});

export const deleteAuthorAction = (authorId: string) => ({
	type: AuthorsActionTypes.DELETE_AUTHOR,
	payload: authorId,
});
