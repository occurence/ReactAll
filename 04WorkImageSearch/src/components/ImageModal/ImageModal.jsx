import css from './ImageModal.module.css';
import Modal from 'react-modal';
Modal.setAppElement('#root');

export const ImageModal = ({ modalClose, modalOpen, photo, tags}) => {
    return(
        <Modal
            onRequestClose={modalClose}
            isOpen={modalOpen}
            contentLabel="Image Modal"
            shouldCloseOnOverlayClick={true}
            className={css.overlay}
        >
            <div className={css.modal}>
                <img src={photo} alt={tags}/>
            </div>
        </Modal>
    )
}