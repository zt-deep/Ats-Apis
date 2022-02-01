const express = require('express');
const MenuController = require('../controllers/MenuController');

const app = express();

app.get('/getMenus', (req, res, next) => {
    MenuController.getMenusAndActivities(req.params, req.auth, (error, data) => {
        if (error) next();
        else 
    });
})