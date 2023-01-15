import { Icon } from '@iconify/react';
import React from 'react';

const Menu = ({ menu }) => {
    return (
        <button className='flex gap-x-1 text-tertiary items-center'>
            <span>{menu.title}</span>
            <Icon icon="tabler:chevron-down" />
        </button>
    );
}

export default Menu;
