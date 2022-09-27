import PropTypes from 'prop-types';

import { ImageGalleryCart, ImageGalleryItemImage } from './ImageGalleryItem.styled';

export function ImageGalleryItem({url, alt, openModal, index}) {
    return <ImageGalleryCart onClick={openModal}>
        <ImageGalleryItemImage src={url} alt={alt}  id={index}/>
    </ImageGalleryCart>
};

ImageGalleryItem.propTypes = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
};