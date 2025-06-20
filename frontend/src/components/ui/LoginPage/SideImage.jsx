import React from 'react';

const SideImage = () => {
    return (
        <div className="side-image-container">
            {/* Placeholder for side image */}
            <img
                src="https://via.placeholder.com/400x600"
                alt="Login Side"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
        </div>
    );
};

export default SideImage;