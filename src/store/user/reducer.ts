import { UserActionTypes, UserAction, UserType } from './types';

const userInitialState: UserType = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
	role: '',
	id: '',
};

export function userReducer(
	state = userInitialState,
	action: UserAction
): UserType {
	switch (action.type) {
		case UserActionTypes.SET_USER: {
			const { successful, result } = action.payload;
			return {
				isAuth: successful,
				name: result.name || '',
				email: result.email || '',
				role: result.role || '',
				token: result.token || '',
				id: result.id || '',
			};
		}
		case UserActionTypes.LOGIN_USER: {
			const { successful, result, user } = action.payload;
			return {
				isAuth: successful,
				name: user.name || '',
				email: user.email || '',
				role: '',
				token: result || '',
				id: '',
			};
		}
		case UserActionTypes.LOGOUT_USER:
			return userInitialState;
		default:
			return state;
	}
}
