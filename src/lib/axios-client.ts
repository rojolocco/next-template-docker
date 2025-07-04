// Axios Test
import axios from "axios";

const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api",
    headers: {
        "Content-Type": "application/json",
    },
});

// Opcional: Interceptores para añadir tokens o manejar errores globalmente
axiosClient.interceptors.request.use((config) => {
    // Puedes agregar auth token aquí si lo necesitas
    return config;
});

axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
        // Puedes manejar errores aquí globalmente
        return Promise.reject(error);
    }
);

export default axiosClient;
