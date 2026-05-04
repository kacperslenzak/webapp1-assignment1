'use strict';

import logger from '../utils/logger.js';
import movieStore from '../models/movie-store.js';
import { v4 as uuidv4 } from 'uuid';

const movie = {
  createView(request, response) {
    logger.info('Movie page loading!');
    const collectionId = request.params.id;
    logger.debug(`Movie id = ${collectionId}`);

    const movieCollectionIds = movieStore.getCollectionIds();
    const index = movieCollectionIds.indexOf(collectionId);
    let nextId = null;
    if (movieCollectionIds[index + 1] != undefined) {
      nextId = movieCollectionIds[index + 1];
    }
    logger.debug(`Next id = ${nextId}`);

    const viewData = {
      title: 'Movie',
      movieCollection: movieStore.getMovieCollection(collectionId),
      nextId: nextId
    };

    response.render('movie', viewData);
  },

  addMovie(request, response) {
    const collectionId = request.params.id;
    const collection = movieStore.getMovieCollection(collectionId);
    const newMovie = {
      id: uuidv4(),
      title: request.body.title,
      director: request.body.director,
      releaseYear: request.body.releaseYear,
      genre: request.body.genre,
      rating: request.body.rating
    };
    movieStore.addMovie(collectionId, newMovie);
    response.redirect('/movie/' + collectionId);
  },
};

export default movie;