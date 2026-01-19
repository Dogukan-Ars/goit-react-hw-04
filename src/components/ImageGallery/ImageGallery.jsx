import ImageCard from "../ImageCard/ImageCard"
import styles from "./ImageGallery.module.css"

const ImageGallery = ({ items = [], onImageClick }) => {
    if (!items.length) return null;

    return (
        <ul className={styles.gallery}>
            {items.map(item => (
                <li key={item.id} className={styles.item}>
                    <ImageCard
                        image={item}
                        onClick={onImageClick}
                    />
                </li>
            ))}
        </ul>
    )
}

export default ImageGallery