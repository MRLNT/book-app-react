import axios from "axios";

export const fetchApi = async ({ url, method, data }) => {
    try {
        const responsiveAxios = await axios({
            url,
            method,
            data,
        });
        return responsiveAxios;
    } catch (error) {
        return error.response;
    }
};