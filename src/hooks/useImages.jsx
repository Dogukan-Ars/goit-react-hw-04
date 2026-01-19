import { useState, useEffect, useRef, useCallback } from 'react';
import { fetchImages } from '../imagesApi';
import toast from 'react-hot-toast';

export function useImages() {
    const [images, setImages] = useState([]);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const requestIdRef = useRef(0);

    const search = useCallback((newQuery) => {
        setQuery(newQuery);
        setPage(1); // Sayfa reset
        setImages([]);  // Eski sonuçları temizle
        setError(false);
    }, []);

    const loadMore = useCallback(() => {
        setPage((prev) => prev + 1);
    }, []);

    useEffect(() => {
        if (!query) return;

        const loadImages = async () => {
            try {
                setLoading(true);
                const data = await fetchImages(query, page);

                // Öncekilerin üzerine ekle
                setImages((prev) => [...prev, ...data]);
            } catch (err) {
                console.error(err);
                toast.error("Failed to load images");
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        loadImages();
    }, [query, page]);

    return {
        images,
        loading,
        error,
        search,
        loadMore,
    };
}
