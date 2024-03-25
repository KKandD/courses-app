import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';

const PrivateRoute = ({ children }) => {
	const userRole = useSelector((state: RootState) => state.user.role);
	const auth = userRole === 'admin';

	return auth ? children : <Navigate to='/courses' />;
};

export default PrivateRoute;
