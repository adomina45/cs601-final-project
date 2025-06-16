import React from 'react';
import type { Image } from '../types/types';
import '../styles/main.css';

function Lightbox({ image, onClose }: {image: Image, onClose: () => void}) {
    return(
        <div className='lightbox'>
            <div className='lightbox-content'>
                <img src={image.image} alt={image.alt} id='image_enlarged' key='image_enlarged'/>
                <span className='button'>
                    <button onClick={onClose}>Close</button>
                </span>
            </div>
        </div>
    );
}

export default Lightbox;