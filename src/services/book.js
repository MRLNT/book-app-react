import { fetchApi } from "../pages/config/api";

const VITE_URL_DEV = import.meta.env.VITE_URL_DEV;

// GET ALL BOOKS
export const getBooks = async () => {
    try {
        const url = `${VITE_URL_DEV}/books`;
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

// GET BOOKS BY ID
export const getBooksById = async (id) => {
    try {
        const url = `${VITE_URL_DEV}/books?id=${id}`;
        const response = await fetchApi({url, method: "GET" });
        return response;
    } catch (error) {
        console.log(error);
    }
}

// ADD BOOKS
export const addBooks = async (data) => {
    try {
      const url = `${VITE_URL_DEV}/books`;
      const response = await fetchApi({ url, method: "POST", data });
      // Log the response from the server
    console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };