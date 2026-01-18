import styles from "./ImageModal.module.css";

const ImageModal = ({ image, onClose }) => {
    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <img
                    src={image.urls.regular}
                    alt={image.alt_description}
                />
            </div>
        </div>
    );
};

export default ImageModal;
