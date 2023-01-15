import React from 'react';
import { background } from '../assets';
const Background = () => {
    return (
        <>
            <div className="absolute inset-0 bg-white/10 backdrop-blur-xl -z-10" />
            <div className='screen bg-red-50 -z-20' style={{ backgroundImage: `url('${background}')` }} />
        </>
    );
}

export default Background;
