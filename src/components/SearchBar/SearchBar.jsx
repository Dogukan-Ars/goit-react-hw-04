import toast from "react-hot-toast";
import styles from "./SearchBar.module.css"

const SearchBar = ({ onSearch }) => {
    // src/components/SearchForm.jsx

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const topic = form.elements.topic.value.trim();

        if (!topic) {
            toast.error("Please enter a search term");
            return;
        };

        onSearch(topic);
        form.reset();
    };

    return (
        <>
            <header className={styles.header}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        className={styles.input}
                        name="topic"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                    <button type="submit" className={styles.button}>Search</button>
                </form>
            </header>
        </>
    )
}

export default SearchBar