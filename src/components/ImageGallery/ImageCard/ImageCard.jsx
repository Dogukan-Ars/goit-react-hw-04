import style from "./ImageCard.module.css"

const ImageCard = ({ image, onClick }) => {
    const { urls, alt_description, user } = image;
    return (
        <div
            className={style.card}
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onClick()}
        >
            <img
                src={urls.small}
                alt={alt_description || "Unsplash image"}
                className={style.image}
            />
            <p className={style.author}>Photo by {user.name}</p>
        </div>
    )
}

export default ImageCard