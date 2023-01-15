import React from 'react';

const PhotoProfile = ({ className }) => {
    return (
        <img className={className} alt=''
            src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' />
    );
}

export default PhotoProfile;
