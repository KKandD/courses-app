import React from 'react';

interface InputProps {
	labelText: string;
	placeholderText: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
	labelText,
	placeholderText,
	onChange,
}) => {
	return (
		<div className='mb-3 mb-lg-0 me-lg-3'>
			<input
				type='text'
				className='form-control'
				id={labelText}
				placeholder={placeholderText}
				onChange={onChange}
				required
			/>
		</div>
	);
};

export default Input;
