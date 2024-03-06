import React from 'react';
import Button from 'src/common/Button/Button';

interface AuthorItemProps {
	authorName: string;
	onButtonClick: () => void;
}

const AuthorItem: React.FC<AuthorItemProps> = ({
	authorName,
	onButtonClick,
}) => {
	return (
		<div className='mb-3'>
			<p>{authorName}</p>
			<Button buttonText='Delete Author' onClick={onButtonClick} />
		</div>
	);
};

export default AuthorItem;
