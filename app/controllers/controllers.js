/* globals __dirname */

const path = require('path');
const fs = require('fs');

const getControllers = (data) => {
    const controllers = {};

    fs.readdirSync(__dirname)
        .filter((f) => f.includes('.controller'))
        .forEach((fileName) => {
            const modulePath = path.join(__dirname, fileName);
            const currentController = require(modulePath);

            controllers[currentController.name] = currentController(data);
        });

    return controllers;
};

module.exports = getControllers;