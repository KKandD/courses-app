import React from 'react';

const Input = () => {
	return (
		<form className='mb-3 mb-lg-0 me-lg-3' role='search'>
			<input
				type='search'
				className='form-control'
				placeholder='Search...'
				aria-label='Search'
			/>
		</form>
	);
};

export default Input;
