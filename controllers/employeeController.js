const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');

exports.create = (req, res) => {

    var employee = new Employee({
        fullName: req.body.fullName,
        email: req.body.email,
        mobile: req.body.mobile,
        city: req.body.city
    });

    employee.save((err, doc) => {
        if (!err) {
            console.log("data inserted successfully");
            res.json(doc);
        }
        else {
            console.log("error", err);
        }
    })
}

exports.findAll = (req, res) => {
    Employee.find((err, doc) => {
        if (!err) {
            res.status(200).json(doc);
        }
        else {
            res.status(500).send({ message: "Some error occurred while retrieving employees" });
        }
    })
}
exports.findOne = (req, res) => {

    const id = req.params.id;
    Employee.findById(id, (err, doc) => {
        if (!err) {
            res.status(200).json(doc);
        }
        else {
            res.status(500).send({ message: "Some error occurred while retrieving employees id" });
        }
    })
}

exports.update = (req, res) => {

    const id = req.params.id;
    console.log('id', id);
    Employee.findByIdAndUpdate(id, req.body, { useFindAndModify: false }, (err, doc) => {
        console.log(req.body);
        if (!err) {
            res.status(200).json(doc);
        }
        else {
            res.status(500).send({ message: "Some error occurred while updating employees" });
        }
    })
}

exports.delete = (req, res) => {

    const id = req.params.id;
    Employee.findByIdAndDelete(id, (err, doc) => {
        if (!err) {
            res.send({
                message: "Employee was deleted successfully!"
            })
        }
        else {
            res.status(500).send({ message: "Could not delete employee" });
        }
    })

}
