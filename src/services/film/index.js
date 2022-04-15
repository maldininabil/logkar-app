import { API } from "configs";
import { handleAsync, addDbCollection } from "utils";
import { store, getFilm } from "modules";

const { dispatch } = store;

export const getFilms = async (payload = {}) => {
    const [res] = await handleAsync(API.getFilm(payload));
    if (res) {
        const data = res.axiosResponse.data;
        dispatch(getFilm(data));
        addDbCollection('film', data);
        return data;
    }
};