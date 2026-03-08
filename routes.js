'use strict';

import express from 'express';
import logger from "./utils/logger.js";

const router = express.Router();

// routes

import start from './controllers/start.js';
import dashboard from './controllers/dashboard.js';
import movie from './controllers/movie.js';
import about from './controllers/about.js';

router.get('/', start.createView);
router.get('/dashboard', dashboard.createView);
router.get('/movie/:id', movie.createView);
router.get('/about', about.createView);

export default router;
