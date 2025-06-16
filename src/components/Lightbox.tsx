import type { Image } from '../types/types';
import '../styles/main.css';

//Lightbox component
function Lightbox({ image, onClose }: {image: Image, onClose: () => void}) {
    return(
        <div className='lightbox' id='lightbox'>
            <div className='lightbox-content' id='lightbox-content'>
                <img src={image.image} alt={image.alt} id='image-enlarged' key='image_enlarged'/>
                <span className='button' id='close-button-span'>
                    <button onClick={onClose} aria-label="Close Lightbox" id='close-button'>Close</button>
                </span>
            </div>
        </div>
    );
}

export default Lightbox;