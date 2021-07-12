require('dotenv').config();
const express = require('express');
const Router = express.Router();
const User = require('../Models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../Middlewares/auth');
const Employee = require('../Models/employee');
const Company = require('../Models/company');

Router.post('/addemployee', auth, (req, res) => {
    try {

        let company = await Company.findById({_id: req.params.companyId});

        let newEmployee = new Employee ({
            ...req.body
        });

        newEmployee.company = req.query.cpId;
        newEmployee.reportingManager =  req.query.mgrId
        await newEmployee.save();

        company.employeeList.push(newEmployee._id);
        await company.save();

        res.status(201).json({message: "Employee added sucessfully", newEmployee})

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:"Couldn't Add Employee", error: "Internal Server Error"});
    }
});


