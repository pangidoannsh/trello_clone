import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import Board from './Board';

const boards = [
    {
        img: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        title: "Vehicle Logistics Project"
    }
]

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClick = e => {
        e.preventDefault();
        setIsOpen(!isOpen);
    }

    return (
        <div className={`${isOpen ? 'w-[230px]' : 'w-6'} h-full glass duration-200`}>
            <button className={`absolute top-5 text-2xl text-tertiary hover:bg-neutral hover:rounded
            ${!isOpen ? 'right-0 translate-x-1/2 rounded-full glass rotate-180' : 'right-2'}`}
                onClick={handleClick}>
                <Icon icon="material-symbols:chevron-left-rounded" />
            </button>
            <div className={`flex flex-col ${!isOpen ? 'hidden' : ''}`}>
                <div className="flex justify-between items-center border-b border-tertiary">
                    <div className="flex items-center gap-x-2 p-4">
                        <img src="https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-21.png"
                            alt="" className='w-6 h-6 rounded' />
                        <div className='font-semibold text-sm text-white'>HREV workspace</div>
                    </div>
                </div>
                <div className="font-semibold text-secondary text-xs mx-2 my-2">your board</div>
                {boards.map((board, index) => <Board board={board} key={index} />)}
            </div>
        </div>
    );
}

export default Sidebar;
