import PropTypes from 'prop-types';

import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector("#modal-root");

export class Modal extends Component {

    componentDidMount() {
        document.addEventListener('keydown', this.modalClose)
    };

    componentWillUnmount() {
        document.removeEventListener('keydown', this.modalClose)
    };

    modalClose = (e) => {
        const { closeModal } = this.props;
        const { target, currentTarget } = e;

        if (target === currentTarget || e.code === 'Escape') {
            closeModal()
        };
    };

    render() {
        const { img } = this.props;

        return createPortal(<Overlay onClick={this.modalClose}>
            <ModalWindow >
                <img src={img.largeImageURL} alt={img.tags} />
            </ModalWindow>
        </Overlay>, modalRoot);
    };
};

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    img: PropTypes.shape({
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
    })
};