import actionType from "./actionType";

export const getFilm = (film) => ({
    type: actionType.GET_FILM,
    data: film
});

export const searchFilm = (film) => ({
    type: actionType.SEARCH_FILM,
    data: film
});
