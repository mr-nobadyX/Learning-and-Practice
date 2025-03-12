import React from 'react';


const Search = ({searchTerm, setSearchTerm})=>{
    return (
        <div className='search'>
            <div>
                <img src="logo.png" alt="search" />

                <input 
                type="text" 
                placeholder='Search through thousands of movie'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />


            </div>
        </div>
    )
}

export default Search;
