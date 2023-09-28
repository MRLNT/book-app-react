import { fetchApi } from "../pages/config/api";

const VITE_URL_DEV = import.meta.env.VITE_URL_DEV;
// VITE_URL_DEV=http://localhost:9090/

// GET ALL BOOKS
export const getBooks = async () => {
    try {
        const url = `${VITE_URL_DEV}/book`;
        const response = await fetchApi({ url, method: "GET" });

        if (response.status !== 200) {
            const error = {
                status: true,
                message: "Error get data!",
            };
            return error;
        }
        return response;
    } catch (error) {
        console.log(error);
    }
};