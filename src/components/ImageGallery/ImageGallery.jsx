import PropTypes from 'prop-types';

import { ImageGalleryList } from './ImageGallery.styled';
import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem'

export function ImageGallery({ images, openModal,  }) {
    return <ImageGalleryList >
        {images.map((item) => <ImageGalleryItem key={item.id} largeImageURL={item.largeImageURL} alt={item.tags} url={item.webformatURL
} openModal={openModal} >
        </ImageGalleryItem>)}
    </ImageGalleryList>
}

ImageGallery.propTypes = {
    LoadMore:  PropTypes.arrayOf(PropTypes.object),
    openModal: PropTypes.func,
}

