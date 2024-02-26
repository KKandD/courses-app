import React from 'react';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = (props) => {
	return (
		<button type='button' className='btn btn-primary' onClick={props.onClick}>
			{props.buttonText}
		</button>
	);
};

export default Button;
