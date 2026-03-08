'use strict';

import logger from "../utils/logger.js";
import movieStore from "../models/movie-store.js";
import appStore from "../models/app-store.js";

const about = {
    createView(request, response) {
        const viewData = {
            title: "Welcome to the Playlist app!",
            moviesInfo: movieStore.getMoviesInfo(),
            info: appStore.getAppInfo()
        };

        logger.debug(viewData);
        response.render('about', viewData);
    },
};

export default about;