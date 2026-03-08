'use strict';

import logger from "../utils/logger.js";
import movieStore from "../models/movie-store.js";

const dashboard = {
    createView(request, response) {
        logger.info("Dashboard page loading!");

        const viewData = {
            title: "Movie Tracker App Dashboard",
            movieCatalogue: movieStore.getCatalogue()
        };

        logger.debug(viewData.movieCatalogue);

        response.render('dashboard', viewData);
    },
};

export default dashboard;