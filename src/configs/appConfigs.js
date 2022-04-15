const activeConfig = process.env.REACT_APP_ENV;

const constants = {
    dev: {
        url: {
            api: process.env.REACT_APP_API_URL,
            origin: process.env.REACT_APP_DOMAIN_NAME
        }
    },

    production: {
        url: {
            api: process.env.REACT_APP_API_URL,
            origin: process.env.REACT_APP_DOMAIN_NAME
        }
    }
};

const appConfig = constants[activeConfig];

export default appConfig;