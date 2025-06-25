import React from 'react';
import img1 from '../../../media/login-image-1.jpg';
import img2 from '../../../media/login-image-2.jpg';
import img3 from '../../../media/login-image-3.jpg';
import { useEffect } from 'react';


const RegisterSideImage = () => {
    const [imagePostion, setImagePosition] = React.useState(1);
    const [imageTimeout, setImageTimeout] = React.useState(null);
    const [onMouseEnter, setOnMouseEnter] = React.useState(false);

    function changeImagePosition() {
        if (imagePostion === 4) {
            setImagePosition(1);
        } else {
            setImagePosition(imagePostion + 1);
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
            src={images[imagePostion - 1]}
            alt="Login Side"
            style={{ width: '900px', height: '900px', objectFit: 'cover', borderRadius: '20px' }}
        />
    );
};

export default RegisterSideImage;