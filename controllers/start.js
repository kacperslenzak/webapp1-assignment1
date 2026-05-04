'use strict';

import logger from "../utils/logger.js";
import appStore from "../models/app-store.js";
import movieStore from "../models/movie-store.js";

const start = {
  createView(request, response) {
    logger.info("Start page loading!");

    const moviesInfo = movieStore.getMoviesInfo();

    let average = moviesInfo.collectionsCount > 0 ? (moviesInfo.moviesCount / moviesInfo.collectionsCount).toFixed(2) : 0;

    const stats = {...moviesInfo, average};
    
    const viewData = {
      title: "The Movie Tracker",
      info: appStore.getAppInfo(),
      stats: stats
    };
    
    response.render('start', viewData);   
  },
};

export default start;
