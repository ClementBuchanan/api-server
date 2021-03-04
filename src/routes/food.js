'use strict';

const express = require('express');

const model = require('../models/food-model.js');
const Wrapper = require('../models/data-collection-class');

const food = new Wrapper(model);

const foodRoute = express.Router();

foodRoute.get('/food', getFoodList);
foodRoute.get('/food/:id', getFood);
foodRoute.post('/food', createFood);
foodRoute.put('/food/:id', updateFood);
foodRoute.delete('/food/:id', deleteFood);

async function getFoodList(req, res) {
    let all = await food.get();
    res.status(200).json(all);
}

async function getFood(req, res) {
    let id = req.params.id;
    let food = await food.get(id);
    res.status(200).json(food);
}
async function createFood(req, res) {
    let obj = req.body;
    console.log(obj);
    let newFood = await food.create(obj);
    res.status(201).json(newFood);
}
async function updateFood(req, res) {
    let id = req.params.id;
    let content = req.body;
    let updated = await food.update(id, content);
    res.status(200).send(updated);
}
async function deleteFood(req, res) {
    let id = req.params.id;
    let deleted = await food.delete(id);
    res.status(204).send('Food successfully deleted..');
}
module.exports = foodRoute;