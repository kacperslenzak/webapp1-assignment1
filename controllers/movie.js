'use strict';

import logger from '../utils/logger.js';
import movieStore from '../models/movie-store.js';

const movie = {
  createView(request, response) {
    const collectionId = request.params.id;
    logger.debug(`Movie id = ${collectionId}`);
    
    const viewData = {
      title: 'Movie',
      movieCollection: movieStore.getMovieCollection(collectionId)
    };

    response.render('movie', viewData);
  },
};

export default movie;