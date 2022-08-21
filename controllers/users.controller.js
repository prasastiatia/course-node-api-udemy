const usersService = require("../services/users.service");

exports.register = (req, res, next) => {
    const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailId: req.body.emailId,
        password: req.body.password,
    };
    usersService.register(data,(error, results) => {
        if(error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: "Bad request" });
        }
        return res.status(201).send({
            success: 1,
            data: results,
        });
    });
}

exports.login = (req, res, next) => {
    const data = {
        emailId: req.body.emailId,
        password: req.body.password,
    };
    usersService.login(data,(error, results) => {
        if(error) {
            console.log(error);
            return res.status(400).send({ success: 0, data: "Bad request" });
        }
        return res.status(201).send({
            success: 1,
            data: results,
        });
    });
}