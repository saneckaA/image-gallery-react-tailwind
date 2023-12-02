import React from 'react'
import Menu from '../Menu';
import SearchContainer from '../SearchContainer';
import GalleryContainer from '../GalleryContainer';

const Card = () => {
  return (
    <div className='bg-white p-8 m-3 space-y-10 shadow-2xl rounded-3xl md:p-40'>
        <Menu />
        <SearchContainer />
        <GalleryContainer />
    </div>
  )
}

export default Card;