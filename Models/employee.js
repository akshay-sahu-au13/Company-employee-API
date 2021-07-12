const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    employeeId: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "user"
    },
    designation: {
        type: String,
        default: "employee"
    },
    reportingTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"employee"
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "company"
    }

}, { timestamps: true });

module.exports = mongoose.model('user', userSchema);
