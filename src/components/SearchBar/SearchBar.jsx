import "./SearchBar.module.css"

const SearchBar = ({ onSearch }) => {
    // src/components/SearchForm.jsx

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const topic = form.elements.topic.value;
        onSearch(topic);
        form.reset();
    };

    return (
        <>
            <header>
                <form onSubmit={handleSubmit}>
                    <input
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                    <button type="submit">Search</button>
                </form>
            </header>
        </>
    )
}

export default SearchBar