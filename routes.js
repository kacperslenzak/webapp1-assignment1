'use strict';

import express from 'express';
import logger from "./utils/logger.js";

const router = express.Router();

// routes

import start from './controllers/start.js';
import dashboard from './controllers/dashboard.js';
import movie from './controllers/movie.js';
import about from './controllers/about.js';

// Start
router.get('/', start.createView);

// About
router.get('/about', about.createView);

// Dashboard
router.get('/dashboard', dashboard.createView);
router.post('/dashboard/addcollection', dashboard.addCollection);

// Movie
router.get('/movie/:id', movie.createView);
router.post('/movie/:id/addmovie', movie.addMovie);

export default router;
