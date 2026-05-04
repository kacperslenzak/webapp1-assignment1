'use strict';

import express from 'express';
import logger from "./utils/logger.js";

const router = express.Router();

// routes

import start from './controllers/start.js';
import dashboard from './controllers/dashboard.js';
import movie from './controllers/movie.js';
import about from './controllers/about.js';
import stats from './controllers/stats.js';

// Start
router.get('/', start.createView);

// About
router.get('/about', about.createView);

// Dashboard
router.get('/dashboard', dashboard.createView);
router.post('/dashboard/addcollection', dashboard.addCollection);
router.get('/dashboard/deletecollection/:id', dashboard.deleteCollection);
router.get('/searchCategory', dashboard.createView);
router.get('/sortData', dashboard.createView);

// Movie
router.get('/movie/:id', movie.createView);
router.post('/movie/:id/addmovie', movie.addMovie);
router.get('/movie/:id/deletemovie/:movieid', movie.deleteMovie);
router.post('/movie/:id/updatemovie/:movieid', movie.updateMovie);

// Stats
router.get('/stats', stats.createView);

export default router;
