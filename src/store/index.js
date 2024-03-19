import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const appInitialState = {
	user: {
		isAuth: false,
		name: '',
		email: '',
		token: '',
	},
	courses: [],
	authors: [],
};

const store = configureStore({
	reducer: rootReducer,
	preloadedState: appInitialState,
});

export default store;
