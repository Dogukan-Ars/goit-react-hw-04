// src/imagesApi.js
import axios from "axios";

console.log("images-api loaded");
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
const ACCESS_KEY = import.meta.env.VITE_API_KEY;

export const fetchImages = async (query, page = 1, perPage = 12) => {

    if (!query) return [];

    try {
        const response = await axios.get("/search/photos", {
            params: {
                query,
                page,
                per_page: perPage,
            },
            headers: {
                Authorization: `Client-ID ${ACCESS_KEY}`,
            },
        });
        return response.data.results;
    } catch (error) {
        console.error("Error fetching articles:", error);
        throw error;
    }
};
