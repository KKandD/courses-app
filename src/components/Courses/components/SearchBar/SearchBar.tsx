import React from 'react';
import Button from 'src/common/Button/Button';
import Input from 'src/common/Input/Input';

const SearchBar = () => {
	return (
		<div className='row justify-content-start'>
			<div className='col-md-6'>
				<Input />
			</div>
			<div className='col-md-4'>
				<Button buttonText='Search' />
			</div>
		</div>
	);
};

export default SearchBar;
