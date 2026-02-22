import toast from "react-hot-toast";
import styles from "./SearchBar.module.css"
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ onSubmit }) => {

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const topic = form.elements.topic.value.trim();

        if (!topic) {
            toast.error("Please enter a search term");
            return;
        };

        onSubmit(topic);
        form.reset();
    };

    const handleSearch = () => {
        const form = document.querySelector(`.${styles.form}`);
        const topic = form.elements.topic.value.trim();
        if (!topic) {
            toast.error("Please enter a search term");
            return;
        }
        onSubmit(topic);
        form.reset();
    }

    return (
        <>
            <header className={styles.header}>
                <form onSubmit={handleSubmit} className={styles.form}>

                    <FiSearch size={18} className={styles.icon} onClick={handleSearch} />

                    <input
                        className={styles.input}
                        name="topic"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        </>
    )
}

export default SearchBar