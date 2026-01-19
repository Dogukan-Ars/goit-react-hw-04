import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement('#root');

const ImageModal = ({ image, onClose, isOpen }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose} // ESC + backdrop click
            overlayClassName={styles.overlay}
            className={styles.content}
            shouldCloseOnOverlayClick={true} // Arka plana tıklayınca kapansın
            shouldCloseOnEsc={true}  // ESC ile kapansın
            contentLabel="Image Modal"
        >
            {image &&
                <img
                    src={image.urls.regular}
                    alt={image.alt_description || "Preview"}
                    className={styles.image}
                />
            }
        </Modal>
    );
};

export default ImageModal;
