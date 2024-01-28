const express = require('express');
const peopleRoutes = require('./people.routes');
const categoriesRoutes = require('./categories.routes');
const coursesRoutes = require('./courses.routes');
const registrationsRoutes = require('./registrations.routes');

module.exports = app => {
  app.use(express.json());
  app.use('/people', peopleRoutes);
  app.use('/categories',categoriesRoutes);
  app.use('/courses',coursesRoutes);
  app.use('/registrations',registrationsRoutes);
}