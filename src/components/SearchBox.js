import React from 'react';

const SearchBox = ({ searchChange }) => {
    
    return (
        <React.Fragment>
            <input type='search' placeholder='search robots' onChange={searchChange} className='pa3 ba b--green bg-lightest-blue' />
            
        </React.Fragment>
    )
}

export default SearchBox;