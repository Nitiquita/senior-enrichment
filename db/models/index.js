'use strict';

// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into Sequelize so any other part of the application could call Sequelize.model('user') OR Sequelize.models.user to get access to the `user` model.
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)

const Student = require('./student')
const Campus = require('./campus')

Student.belongsTo(Campus) // I would honestly expect to see this relation both ways so we have the Sequelize benefits on both models -- KH


module.exports = {Student, Campus}
