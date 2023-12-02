import React from 'react';
import bookmark from '../images/bookmark.svg';

const SearchContainer = () => {
  return (
    <div className='flex flex-col items-center justify-between space-y-5 md:flex-row md:space-y-0 md:space-x-8'>
      <div className='flex flex-row justify-between border-b space-x-px'>
        <input type="text" className=' ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none' placeholder='Search' />
        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <button className='py-3 px-14 tex-lg font-normal border border-black bg-black text-white rounded-md shadow-2xl duration-200 hover:bg-white hover:text-black'>Upload</button>
    </div>
  )
}

export default SearchContainer;