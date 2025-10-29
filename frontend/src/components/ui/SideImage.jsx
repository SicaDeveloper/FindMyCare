import React from 'react';
import img1 from '../../media/login-image-1.jpg';
import img2 from '../../media/login-image-2.jpg';
import img3 from '../../media/login-image-3.jpg';
import { useEffect } from 'react';


const RegisterSideImage = () => {
    const [imagePosition, setImagePosition] = React.useState(0);
    const [imageTimeout, setImageTimeout] = React.useState(null);
    const [onMouseEnter, setOnMouseEnter] = React.useState(false);

    function changeImagePosition() {
        if (imagePosition === 3) {
            setImagePosition(0);
        } else {
            setImagePosition(imagePosition + 1);
        }
    }

    function startImageRotation() {
        const timeout = setInterval(changeImagePosition, 8000);
        setImageTimeout(timeout);
    }

    const images = [img1, img2, img3];

    useEffect(() => {

        startImageRotation();

        if (onMouseEnter) {
            clearInterval(imageTimeout);
            return;
        }

        return () => {
            clearInterval(imageTimeout);
        };
    }, []);

    return (
        <img
            src={images[imagePosition]}
            alt="Login Side"
            style={{ maxWidth: '700px', maxHeight: '700px', aspectRatio: '1/1', objectFit: 'cover', borderRadius: '20px' }}
        />
    );
};

export default RegisterSideImage;