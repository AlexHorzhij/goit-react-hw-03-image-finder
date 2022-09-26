import PropTypes from 'prop-types';

import { ImageGalleryCart, ImageGalleryItemImage } from './ImageGalleryItem.styled';

export function ImageGalleryItem({url, alt, openModal, largeImageURL}) {
    return <ImageGalleryCart onClick={openModal}>
        <ImageGalleryItemImage src={url} alt={alt}  id={largeImageURL}/>
    </ImageGalleryCart>
}

ImageGalleryItem.propTypes = {
    url: PropTypes.string,
    alt: PropTypes.string,
    openModal: PropTypes.func,
    largeImageURL:PropTypes.string,
}