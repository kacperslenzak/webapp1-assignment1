'use strict';

import logger from "../utils/logger.js";
import movieStore from "../models/movie-store.js";

const dashboard = {
    createView(request, response) {
        logger.info("Dashboard page loading!");

        const viewData = {
            title: "Playlist App Dashboard",
            movieCatalogue: movieStore.getCatalogue()
        };

        logger.debug(viewData.playlists);

        response.render('dashboard', viewData);
    },
};

export default dashboard;