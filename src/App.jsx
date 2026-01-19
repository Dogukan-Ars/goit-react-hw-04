import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { useImages } from "./hooks/useImages";

function App() {
  const { images, loading, error, search, loadMore } = useImages();

  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <Toaster position="top-right" />

      <SearchBar onSearch={search} />

      {error && <ErrorMessage message="The server could not be reached. Please try again later." />}
      {loading && <Loader />}

      <ImageGallery items={images} onImageClick={openModal} />

      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={loadMore} />
      )}

      <ImageModal
        image={selectedImage}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}

export default App;
