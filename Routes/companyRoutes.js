require('dotenv').config();
const express = require('express');
const Router = express.Router();
const User = require('../Models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../Middlewares/auth');
const Employee = require('../Models/employee');
const Company = require('../Models/company');