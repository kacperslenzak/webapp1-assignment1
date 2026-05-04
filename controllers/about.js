'use strict';

import logger from "../utils/logger.js";
import movieStore from "../models/movie-store.js";
import appStore from "../models/app-store.js";
import accounts from './accounts.js';

const about = {
    createView(request, response) {
        const loggedInUser = accounts.getCurrentUser(request);

        if (loggedInUser) {
            const viewData = {
                title: "Welcome to the the movie tracker app!",
                fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
                moviesInfo: movieStore.getMoviesInfo(), // we pass movie info to have stats about collections
                info: appStore.getAppInfo() // app info for title, version, etc
            };

            logger.debug(viewData);
            response.render('about', viewData);
        } else response.redirect('/');  
    },
};

export default about;