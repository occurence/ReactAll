import { useState } from 'react';
import css from './ImageGalleryItem.module.css';
import { ImageModal } from '../ImageModal/ImageModal';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [toggleClose, setToggleClose] = useState(false);
    const handleOpenModal = () => {
        setSelectedPhoto(largeImageURL);
        setToggleClose(true);
    }
    const handleCloseModal = () => {
        setSelectedPhoto(null);
        setToggleClose(false);
    }

    // const { webformatURL, tags } = this.props;
    // const { selectedPhoto, toggleClose } = this.state;
    return(
        <li className={css.imageGalleryItem}
            onClick={()=>{handleOpenModal();setToggleClose(!toggleClose)}}>
            <img
                src={webformatURL}
                alt={tags}
                className={css.imageGalleryItemImage}
            />
            {toggleClose &&
                <ImageModal
                    modalClose={handleCloseModal}
                    modalOpen={selectedPhoto !== null}
                    photo={selectedPhoto}
                    tags={tags}
                />
            }
        </li>
    )
}