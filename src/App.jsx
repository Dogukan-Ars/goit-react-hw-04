import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import ImageModal from './components/ImageModal/ImageModal'
import Loader from './components/Loader/Loader'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { fetchImages } from './imagesApi'

function App() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (query) => {
    try {
      setImages([]);
      setError(false);
      setLoading(true);

      console.log("fetchImages called with:", query);
      const images = await fetchImages(query);

      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log("API returned:", images);
      setImages(images);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  console.log("images:", images, Array.isArray(images));

  return (
    <div>
      <Toaster position='top-right' />
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ImageGallery items={images} onImageClick={setSelectedImage} />
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />)}
    </div>
  );
}

export default App
