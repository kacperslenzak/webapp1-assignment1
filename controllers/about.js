'use strict';

import logger from "../utils/logger.js";
import movieStore from "../models/movie-store.js";
import appStore from "../models/app-store.js";

const about = {
    createView(request, response) {
        const viewData = {
            title: "Welcome to the the movie tracker app!",
            moviesInfo: movieStore.getMoviesInfo(), // we pass movie info to have stats about collections
            info: appStore.getAppInfo() // app info for title, version, etc
        };

        logger.debug(viewData);
        response.render('about', viewData);
    },
};

export default about;