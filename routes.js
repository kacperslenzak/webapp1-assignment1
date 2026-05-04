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
import accounts from './controllers/accounts.js';

// Start
router.get('/start', start.createView);

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

//auth
router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);


export default router;
