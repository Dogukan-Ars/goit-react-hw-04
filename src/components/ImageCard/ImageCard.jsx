import style from "./ImageCard.module.css"

const ImageCard = ({ image, onClick }) => {
    const { urls, alt_description, user } = image;
    return (
        <div
            className={style.card}
            role="button"
            tabIndex={0}
            // Tıklanınca image bilgisini üst componente gönderiyoruz
            onClick={() => onClick(image)}
            // Klavye erişilebilirliği (Enter ile açılabilir)
            onKeyDown={(e) => e.key === 'Enter' && onClick()}
        >
            <img
                src={urls.small}
                alt={alt_description || "Unsplash image"}
                className={style.image}
            />
            <p className={style.author}><span className={style.photo_own}>Photo by</span> {user.name}</p>
        </div>
    )
}

export default ImageCard