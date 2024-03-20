import { UserActionTypes, UserLoginResponse, UserResponse } from './types';

export const setUserAction = (userData: UserResponse) => ({
	type: UserActionTypes.SET_USER,
	payload: userData,
});

export const loginUserAction = (loginData: UserLoginResponse) => ({
	type: UserActionTypes.LOGIN_USER,
	payload: loginData,
});

export const registerUserAction = () => ({
	type: UserActionTypes.REGISTER_USER,
});

export const logoutUserAction = () => ({
	type: UserActionTypes.LOGOUT_USER,
});
