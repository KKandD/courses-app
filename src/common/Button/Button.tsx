import React from 'react';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = (props) => {
	return (
		<button onClick={props.onClick}>{props.buttonText.toUpperCase()}</button>
	);
};

export default Button;
