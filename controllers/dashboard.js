'use strict';

import logger from "../utils/logger.js";
import movieStore from "../models/movie-store.js";
import { v4 as uuidv4 } from 'uuid';

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

    addCollection(request, response) {
        const newCollection = {
            id: uuidv4(),
            title: request.body.title,
            movies: [],
        };
        movieStore.addCollection(newCollection);
        response.redirect('/dashboard');
    },
};

export default dashboard;