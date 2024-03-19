import { UserActionTypes, UserResponse } from './types';

export const setUserAction = (userData: UserResponse) => ({
	type: UserActionTypes.SET_USER,
	payload: userData,
});

export const registerUserAction = () => ({
	type: UserActionTypes.REGISTER_USER,
});

export const logoutUserAction = () => ({
	type: UserActionTypes.LOGOUT_USER,
});
