import React from 'react';

const Board = ({ board }) => {
    return (
        <div className='flex p-3 gap-x-2 board items-center'>
            <img src={board.img} alt="" className='w-8 h-6 rounded-sm' />
            <span className='text-sm text-white'>{board.title}</span>
        </div>
    );
}

export default Board;
