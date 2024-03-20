import { RootState } from '../rootReducer';
import { fetchCurrentUser } from '../../services';
import { setUserAction } from './actions';

export const fetchCurrentUserThunk = (token) => {
	return async (dispatch) => {
		try {
			// const extractedToken = token.split(' ')[1];
			// console.log('passed token: ' + extractedToken);
			console.log('token: ' + token);
			const response = await fetchCurrentUser(token);
			response.result.token = token;
			dispatch(setUserAction(response));
			console.log('token: ' + response.result.token);
			console.log('name: ' + response.result.name || '');
			console.log('role: ' + response.result.role);
		} catch (error) {
			console.error('Error fetching current user:', error);
		}
	};
};
