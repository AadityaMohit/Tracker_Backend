const Project = require('../models/Project');

exports.createProject = async (req, res) => {
  const userId = req.user.id;
  const { name } = req.body;

  const count = await Project.countDocuments({ userId });
  if (count >= 4) return res.status(400).json({ error: 'Max 4 projects allowed' });

  const project = await Project.create({ userId, name });
  res.status(201).json(project);
};

exports.getProjects = async (req, res) => {
  const userId = req.user.id;
  const projects = await Project.find({ userId });
  res.json(projects);
};
