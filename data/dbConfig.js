// const knex = require('knex');
require('dotenv').config();

const dbEngine = process.env.NODE_ENV || 'development';
const knexConfig = require('../knexfile')[dbEngine];


module.exports = knex(knexConfig);