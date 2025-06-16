import { useState } from 'react';
import type { Image } from '../types/types';
import '../styles/main.css';
import Lightbox from './Lightbox';

function PhotoGrid() {
    //control lightbox state
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [imgSrc, setImgSrc] = useState<Image>();

    //open lightbox
    const openLightbox = (src: Image) => {
        setImgSrc(src);
        setIsOpen(true);
    };

    //close lightbox
    const closeLightbox = () => {
        setIsOpen(false);
        setImgSrc(undefined);
    };

    //images
    const images = [
        {'image': '/assets/alex_and_isabel_slugger.jpg', 'alt': 'Alex and Isabel in Front of the Slugger Statue at Hadlock Field.'},
        {'image': '/assets/alex_before_church.jpg', 'alt': 'Alex Waiting for the Peaks Island Ferry to go to Church in Portland, Maine.'},
        {'image': '/assets/alex_isabel_sea_dogs.jpg', 'alt': 'Alex and Isabel watching a Sea Dogs Baseball Game.'},
        {'image': '/assets/alex_isabel_star_wars_theater.jpg', 'alt': 'Alex and Isabel at the Star Wars Live Orchestra in Portland, Maine.'},
        {'image': '/assets/alex_resturant.jpg', 'alt': 'Alex Waiting for Food at a Resturant.'},
        {'image': '/assets/alex_wilbur_after_surgery.jpg', 'alt': 'Alex holding Wilbur After Surgery.'},
        {'image': '/assets/alex_wilbur_beach.jpg', 'alt': 'Alex holding Wilbur at Sandy Beach on Peaks Island, Maine.'},
        {'image': '/assets/bella_wilbur_walk.jpg', 'alt': 'Bella and Wilbur being Walked on Peaks Island, Maine.'},
    ];

    return (
        <span>
            {isOpen && imgSrc && <Lightbox image={imgSrc} onClose={closeLightbox} />}
            <div className="photo-grid" id='photo-gtid'>
                {/*loop through all images for displaying*/}
                {images.map((image, index) => (
                    <span key={`image-${index}`} id={`image-${index}-span`} onClick={() => openLightbox(image)}>
                        <img src={image.image} alt={image.alt} id={`image-${index}`} className='hamburger' />
                    </span>
                ))}
            </div>
        </span>
    )
}

export default PhotoGrid;