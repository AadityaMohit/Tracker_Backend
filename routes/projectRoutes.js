const express = require('express');
const { createProject, getProjects } = require('../controllers/projectController');
const authenticate = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authenticate, createProject);
router.get('/', authenticate, getProjects);

module.exports = router;
