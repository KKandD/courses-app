import { fetchAuthors, addNewAuthor } from '../../services';
import { saveAuthorsAction, addNewAuthorAction } from '../authors/actions';

export const addNewAuthorThunk = (authorData, token) => async (dispatch) => {
	try {
		const newAuthorData = await addNewAuthor(authorData, token);
		dispatch(addNewAuthorAction(newAuthorData));
	} catch (error) {
		console.error('Error adding author:', error);
	}
};

export const fetchAuthorsThunk = () => async (dispatch) => {
	try {
		const authorsData = await fetchAuthors();
		dispatch(saveAuthorsAction(authorsData));
	} catch (error) {
		console.error('Error fetching authors:', error);
	}
};
