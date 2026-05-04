"use strict";
import logger from "../utils/logger.js";
import movieStore from "../models/movie-store.js";
import appStore from "../models/app-store.js";

const stats = {
    createView(request, response) {
        logger.info("Stats page loading!");

        const moviesInfo = movieStore.getMoviesInfo();

        let average = moviesInfo.collectionsCount > 0 ? (moviesInfo.moviesCount / moviesInfo.collectionsCount).toFixed(2) : 0;

        const info = appStore.getAppInfo()

        const stats = { ...moviesInfo, average };

        const viewData = {
            title: "Movie Tracker App Statistics",
            stats: stats, 
            info: info
        };

        response.render("stats", viewData);
    },
};

export default stats;
