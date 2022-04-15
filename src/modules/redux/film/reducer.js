import actionType from "./actionType";
import { updateObject } from "utils";

const initialState = {
    originalListFilms: [],
    films: []
};

const getFilm = (state, action) => {
    return updateObject(state, {
        ...state,
        originalListFilms: action.data.results,
        films: action.data.results
    });
};

const searchFilm = (state, action) => {
    const originalList = state.originalListFilms;
    const search = action.data.toLowerCase();
    const searchList = originalList.filter((row) => (
        (row.title.toLowerCase().indexOf(search) > -1 || row.director.toLowerCase().indexOf(search) > -1)
    ));
    return updateObject(state, {
        ...state,
        films: searchList
    });
};

const filmReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.GET_FILM: return getFilm(state, action);
        case actionType.SEARCH_FILM: return searchFilm(state, action);
        default: return state;
    }
};

export default filmReducer;