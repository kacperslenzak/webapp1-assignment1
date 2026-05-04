'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const movieStore = {
  store: new JsonStore('./models/movie-store.json', { movieCollection: [] }),
  collection: 'movieCollection',
  array: 'movies',

  addMovie(id, movie) {
    this.store.addItem(this.collection, id, this.array, movie);
  },

  removeMovie(id, movieId) {
    this.store.removeItem(this.collection, id, this.array, movieId);
  },

  editMovie(id, movieId, updatedMovie) {
    this.store.editItem(this.collection, id, movieId, this.array, updatedMovie);
  },

  addCollection(collection) {
    this.store.addCollection(this.collection, collection);
  },

  removeCollection(id) {
    const collection = this.getMovieCollection(id);
    this.store.removeCollection(this.collection, collection);
  },

  getAllMovieCollections() {
    return this.store.findAll(this.collection);
  },

  getCatalogue() { // used on catalogue page, dont need to fetch all the movie info yet
    const collections = this.store.findAll(this.collection);
    return collections.map(c => ({ // map through collections and return only id and title. rest of info not needed
      id: c.id,
      title: c.title
    }))
  },

  getMovieCollection(id) { // fetch by id, used for displaying individual collection details
    return this.store.findOneBy(this.collection, (movieCollection => movieCollection.id === id));
  },

  getMoviesInfo() { // returns amount of movies in total and amount of collections
    const allMovies = this.store.findAll(this.collection); // length of this is amount of collections

    let moviesCount = 0;
    let largestCollection = allMovies[0].movies.length;
    let smallestCollection = allMovies[0].movies.length;
    for (let i = 0; i < allMovies.length; i++) { // simple loop to count movies
      let collectionMovieCount = allMovies[i].movies.length;
      moviesCount = moviesCount + collectionMovieCount;
      if (collectionMovieCount > largestCollection) {
        largestCollection = collectionMovieCount;
      }

      if (collectionMovieCount < smallestCollection) {
        smallestCollection = collectionMovieCount;
      }
    }

    return { moviesCount, collectionsCount: allMovies.length, largestCollection, smallestCollection };
  },

  getCollectionIds() {
    const collections = this.store.findAll(this.collection);
    const collectionIds = collections.map(c => c.id);
    return collectionIds.sort((a, b) => a - b); // sort ids in ascending order
  }
};

export default movieStore;