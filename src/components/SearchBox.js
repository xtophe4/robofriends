import React from 'react';

const SearchBox = ({ searchfield,searchChange }) => {
	console.log('SearchBox');
	return (
		<input 
			className="pa3 ba b--green bg-lightest-blue"
			type="search" 
			placeholder="search robots"
			onChange={searchChange}
		/>
	);
}

export default SearchBox;