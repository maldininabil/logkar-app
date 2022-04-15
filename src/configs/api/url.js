import appConfig from "../appConfigs";

export const config = appConfig;

const baseUrl = {
    film: `${config.url.api}api/films`,
};

export default baseUrl;