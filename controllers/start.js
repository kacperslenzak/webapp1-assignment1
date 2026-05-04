'use strict';

import logger from "../utils/logger.js";
import appStore from "../models/app-store.js";
import movieStore from "../models/movie-store.js";
import accounts from './accounts.js';

const start = {
  createView(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    logger.info("Start page loading!");

    if (loggedInUser) {
      const moviesInfo = movieStore.getMoviesInfo();

      let average = moviesInfo.collectionsCount > 0 ? (moviesInfo.moviesCount / moviesInfo.collectionsCount).toFixed(2) : 0;

      const stats = { ...moviesInfo, average };

      const viewData = {
        title: "The Movie Tracker",
        info: appStore.getAppInfo(),
        stats: stats,
        fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
      };

      response.render('start', viewData);
    } else response.redirect('/');
  },
};

export default start;
