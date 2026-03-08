'use strict';

import logger from '../utils/logger.js';
import movieStore from '../models/movie-store.js';

const movie = {
  createView(request, response) {
    logger.info('Movie page loading!');
    const collectionId = request.params.id;
    logger.debug(`Movie id = ${collectionId}`);

    const movieCollectionIds = movieStore.getCollectionIds();
    const index = movieCollectionIds.indexOf(collectionId);
    let nextId = null;
    if(movieCollectionIds[index+1] != undefined) {
      nextId = movieCollectionIds[index+1];
    }
    logger.debug(`Next id = ${nextId}`);

    const viewData = {
      title: 'Movie',
      movieCollection: movieStore.getMovieCollection(collectionId),
      nextId: nextId
    };

    response.render('movie', viewData);
  },
};

export default movie;