import { UserActionTypes, UserAction, UserType } from './types';

const userInitialState: UserType = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

export function userReducer(
	state = userInitialState,
	action: UserAction
): UserType {
	switch (action.type) {
		case UserActionTypes.SET_USER: {
			const { successful, user, result } = action.payload;
			return {
				isAuth: successful,
				name: user.name || '',
				email: user.email || '',
				token: result || '',
			};
		}
		case UserActionTypes.LOGOUT_USER:
			return userInitialState;
		default:
			return state;
	}
}
