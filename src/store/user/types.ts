export type UserType = {
	isAuth: boolean;
	name: string;
	email: string;
	token: string;
};

export type UserResponse = {
	successful: boolean;
	user: {
		email: string;
		name: string;
	};
	result: string;
};

export const enum UserActionTypes {
	SET_USER = 'SET_USER',
	REGISTER_USER = 'REGISTER_USER',
	LOGOUT_USER = 'LOGOUT_USER',
}

export interface SetUser {
	type: UserActionTypes.SET_USER;
	payload: UserResponse;
}

export interface RegisterUser {
	type: UserActionTypes.REGISTER_USER;
}

export interface LogoutUser {
	type: UserActionTypes.LOGOUT_USER;
}

export type UserAction = SetUser | RegisterUser | LogoutUser;
