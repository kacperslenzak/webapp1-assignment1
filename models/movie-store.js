'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const movieStore = {
  store: new JsonStore('./models/movie-store.json', { movieCollection: [] }),
  collection: 'movieCollection',

  getAllMovieCollections() {
    return this.store.findAll(this.collection);
  },

  getCatalogue() { // used on catalogue page, dont need to fetch all the movie info yet
    const collections = this.store.findAll(this.collection);
    return collections.map(c => ({
      id: c.id,
      title: c.title
    }))
  },

  getMovieCollection(id) {
    return this.store.findOneBy(this.collection, (movieCollection => movieCollection.id === id));
  },

  getMoviesInfo() {
    const allMovies = this.store.findAll(this.collection);

    let moviesCount = 0;
    for (let i = 0; i < allMovies.length; i++) {
      moviesCount = moviesCount + allMovies[i].movies.length;
    }

    
    return { moviesCount, collectionsCount: allMovies.length };
  }
};

export default movieStore;