import { fetchApi } from "../pages/config/api";

const VITE_URL_DEV = import.meta.env.VITE_URL_DEV;

// ADD USER
export const addUser = async (data) => {
    try {
      const url = `${VITE_URL_DEV}/user/login`;
      const response = await fetchApi({ url, method: "POST", data });
      // Log the response from the server
        // console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };