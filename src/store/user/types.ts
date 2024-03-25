export type UserType = {
	isAuth: boolean;
	name: string;
	email: string;
	token: string;
	role: string;
	id: string;
};

export type UserLoginResponse = {
	successful: boolean;
	result: string;
	user: {
		email: string;
		name: string;
	};
};

export type UserResponse = {
	successful: boolean;
	result: {
		name: string;
		email: string;
		role: string;
		id: string;
		token: string;
	};
};

export const enum UserActionTypes {
	SET_USER = 'SET_USER',
	LOGIN_USER = 'LOGIN_USER',
	REGISTER_USER = 'REGISTER_USER',
	LOGOUT_USER = 'LOGOUT_USER',
}

export interface SetUser {
	type: UserActionTypes.SET_USER;
	payload: UserResponse;
}

export interface LoginUser {
	type: UserActionTypes.LOGIN_USER;
	payload: UserLoginResponse;
}

export interface RegisterUser {
	type: UserActionTypes.REGISTER_USER;
}

export interface LogoutUser {
	type: UserActionTypes.LOGOUT_USER;
}

export type UserAction = SetUser | LoginUser | RegisterUser | LogoutUser;
