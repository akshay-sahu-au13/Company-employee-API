const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
        },
    companyId: {
        type: String,
        required: true
    },
    totalEmployees: {
        type: Number,
        default: 0
    },
    employeeList: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "employee",
        default: null
    },
    managers: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "employee",
        default: null
    }

});

module.exports = mongoose.model('company', companySchema);