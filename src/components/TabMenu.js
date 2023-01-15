import React from 'react';
import { GlassIcon } from '../assets/';
import Menu from './Menu';
import Search from './Search';
import PhotoProfile from "./PhotoProfile";

const menus = [
    { title: "Workspace" },
    { title: "Recent" },
    { title: "Started" },
    { title: "Templates" },
]
const TabMenu = () => {
    return (
        <section className='flex justify-between px-4 py-2 bg-neutral'>
            <div id="menu" className='flex gap-x-4 items-center'>
                <div className="text-2xl font-semibold text-white">Trelli</div>
                {menus.map((menu, index) => <Menu key={index} menu={menu} />)}
            </div>
            <div className='flex gap-x-4 items-center'>
                <Search />
                <span className='rotate-[30deg]'>
                    <GlassIcon icon="notification" />
                </span>
                <GlassIcon icon="helper" />
                <PhotoProfile className="w-6 h-6 rounded-full" />
            </div>
        </section>
    );
}

export default TabMenu;
