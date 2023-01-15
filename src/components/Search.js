import React from 'react';
import { GlassIcon } from '../assets';
const Search = () => {
    return (
        <div className='relative w-40 bg-dust rounded-lg py-1 pr-2 pl-7'>
            <label htmlFor='search-input' className='absolute left-2 top-1/2 -translate-y-1/2'>
                <GlassIcon icon="search" />
            </label>
            <input id='search-input' type="text" className='text-sm text-neutral bg-transparent w-full focus:outline-none'
                placeholder='Search' />
        </div>
    );
}

export default Search;
