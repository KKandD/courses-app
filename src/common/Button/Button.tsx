import React from 'react';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = (props) => {
	const buttonClassName = `btn btn-primary ${props.className || ''}`;

	return (
		<button type='button' className={buttonClassName} onClick={props.onClick}>
			{props.buttonText}
		</button>
	);
};

export default Button;
