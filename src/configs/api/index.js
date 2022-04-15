import baseUrl from "configs/api/url";
import ApiRequest from "configs/api/config";

const API = {};

// Driver
API.getFilm = ApiRequest.get(baseUrl.film);

export default API;