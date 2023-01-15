import React from 'react';

const members = [
    { photo: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" },
    { photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" },
    { photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" },
    { photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" },
    { photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" },
]
const PhotoMembers = () => {
    return (
        <div className='relative w-20 self-start'>
            {members.slice(0, 4).map((member, index) => (
                <div key={index} className="absolute"
                    style={{ left: index * 16, zIndex: members.length - index }}>
                    <button className='group relative'>
                        <div className='absolute rounded-full w-7 h-7 group-hover:bg-slate-200/30'></div>
                        <img className='w-7 h-7 rounded-full' alt="" src={member.photo} />
                    </button>
                </div>
            ))}
        </div>
    );
}

export default PhotoMembers;
