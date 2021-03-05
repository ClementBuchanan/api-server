'use strict';

const express = require('express');

const model = require('../models/clothes-model.js');
const Wrapper = require('../models/data-collection-class');

const clothes = new Wrapper(model);

const clothesRoute = express.Router();

clothesRoute.get('/clothes', getClothesList);
clothesRoute.get('/clothes/:id', getClothes);
clothesRoute.post('/clothes', createClothes);
clothesRoute.put('/clothes/:id', updateClothes);
clothesRoute.delete('/clothes/:id', deleteClothes);

async function getClothesList(req, res) {
    let all = await clothes.get();
    res.status(200).json(all);
}

async function getClothes(req, res) {
    let id = req.params.id;
    let clothes = await clothes.get(id);
    res.status(200).json(clothes);
}
async function createClothes(req, res) {
    let obj = req.body;
    console.log(obj);
    let newClothes = await clothes.create(obj);
    res.status(201).json(newClothes);
}
async function updateClothes(req, res) {
    let id = req.params.id;
    let content = req.body;
    let updated = await clothes.update(id, content);
    res.status(200).send(updated);
}
async function deleteClothes(req, res) {
    let id = req.params.id;
    let deleted = await clothes.delete(id);
    res.status(204).send('Clothes successfully deleted..');
}
module.exports = clothesRoute;