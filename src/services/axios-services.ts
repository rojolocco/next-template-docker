// Axios client test
import axiosClient from "@/lib/axios-client";

export async function getUsers() {
    try {
        const response = await axiosClient.get("/users");
        return response.data; // Asumiendo que la API devuelve { data: [...] }
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        throw error;
    }
}
