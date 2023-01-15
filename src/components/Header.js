import { Icon } from '@iconify/react';
import React from 'react';
import { GlassIcon } from '../assets';
import PhotoMembers from './PhotoMembers';

const Header = () => {
    return (
        <div className='header sticky left-0 top-0'>
            <div className="flex gap-x-4 items-center">
                <div className="font-semibold nowarp md:text-lg lg:text-2xl text-dust">Vehicle Logistics Project</div>
                <button className="glass p-1 rounded btn">
                    <Icon icon="fluent:star-12-regular" className='text-white text-lg' />
                </button>
                <div className="divider" />
                <button className="glass rounded flex px-2 py-1 gap-2 btn">
                    <GlassIcon icon="lock" />
                    <span className='text-sm text-white '>Private</span>
                </button>
                <div className="divider" />
                <div className="flex gap-x-2">
                    <button className="glass rounded flex px-2 py-1 gap-2 btn">
                        <GlassIcon icon="board" />
                        <span className='text-sm text-white '>Board</span>
                    </button>
                    <button className="glass rounded flex items-center p-1 btn">
                        <Icon icon="akar-icons:chevron-down" className='text-base text-white' />
                    </button>
                </div>
            </div>
            <div className="flex gap-x-4 items-center">
                <button className="glass rounded flex px-2 py-1 gap-2 btn">
                    <GlassIcon icon="flash" />
                    <span className='text-sm text-white '>Automation</span>
                </button>
                <div className="divider" />
                <button className="glass rounded flex px-2 py-1 gap-2 btn">
                    <GlassIcon icon="filter" />
                    <span className='text-sm text-white '>Filter</span>
                </button>
                <div className="divider" />
                <PhotoMembers />
                <button className="bg-secondary rounded flex px-2 py-1 gap-2">
                    <GlassIcon icon="user-add" />
                    <span className='text-sm text-white '>Share</span>
                </button>
                <div className="divider" />
                <button className="glass rounded flex p-1 btn">
                    <GlassIcon icon="more" />
                </button>

            </div>
        </div>
    );
}

export default Header;
