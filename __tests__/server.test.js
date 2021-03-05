'use strict';

const supergoose = require('@code-fellows/supergoose');
const { request } = require('express');
const { app } = require('../src/server.js');
const testServer = supergoose(app);

describe('Food Collection', () => {
	// it('404 on a bad route', async () => {
	// 	await request.get('/DoesNotExist')
	// 		.then(data => {
	// 			expect(data.status).toEqual(404);
	// 		});
	// });

	// it('404 on a bad method', async () => {
	// 	await request.post('/clothes')
	// 	then(data => {
	// 		expect(data.status).toEqual(404);
	// 	});
	// });

	it('can create a new food item', () => {
		let testFood = { name: 'testfood item', calories: 9999, type: 'VEG' };
		let expected = { name: 'test food item', calories: 9999, type: 'VEG' };
		return testServer.post('/food').send(testFood)
		.then(results => {
			console.log(results.body);
		})
	});
});

describe('Food item', () => {
	it('can get a food item', () => {
		let testFood = { name: 'test food item', calories: 9999, type: 'VEG' };
		let expected = { name: 'test food item', calories: 9999, type: 'VEG' };
			return testServer.get('/food').send(testFood)
				return food.create(testFood).then((record) => {
					return food.get(record._id).then((item) => {
					Object.keys(testFood).forEach((key) => {
					expected(item[key]).toEqual(expected[key]);
				});
			});
		});
	});
});

describe('Food item', () => {
	it('can update a food item', () => {
		let testFood = { name: 'test food item', calories: 9999, type: 'VEG' };
		let expected = { name: 'test food item', calories: 9999, type: 'VEG' };
		return testServer.put('/food').send(testFood)
		return food.create(testFood).then((record) => {
			return food.put(record._id).then((item) => {
				Object.keys(testFood).forEach((key) => {
					expected(item[key]).toEqual(expected[key]);
				});
			});
		});
	});
});

describe('Food item', () => {
	it('can delete a food item', () => {
		let testFood = { name: 'test food item', calories: 9999, type: 'VEG' };
		let expected = { name: 'test food item', calories: 9999, type: 'VEG' };
		return testServer.delete('/food').send(testFood)
		return food.create(testFood).then((record) => {
			return food.delete(record._id).then((item) => {
				Object.keys(testFood).forEach((key) => {
					expected(item[key]).toEqual(expected[key]);
				});
			});
		});
	});
});

describe('clothes collection', () => {
	it('can create a new clothing item', () => {
		let testClothes = {
			brand: 'test clothiing item',
			color: 'blue',
			type: 'SHIRT',
		};
		let expected = { name: 'test clothing item', color: 'blue', type: 'SHIRT' };
		return testServer.post('/clothes').send(testClothes)
		return clothes.create(testClothes).then((record) => {
			console.log('test clothing item from DB: ', record);
			Object.keys(testClothes).forEach((key) => {
				expected(record[key]).toEqual(expected[key]);
			});
		});
	});
});

describe('find clothes item', () => {
	it('can find a new clothing item', () => {
		let testClothes = {
			brand: 'test clothiing item',
			color: 'blue',
			type: 'SHIRT',
		};
		let expected = { name: 'test clothing item', color: 'blue', type: 'SHIRT' };
		return testServer.get('/clothes').send(testClothes)
		return clothes.get(testClothes).then((record) => {
			console.log('test clothing item from DB: ', record);
			Object.keys(testClothes).forEach((key) => {
				expected(record[key]).toEqual(expected[key]);
			});
		});
	});
});

describe('update clothes item', () => {
	it('can update clothing item', () => {
		let testClothes = {
			brand: 'test clothiing item',
			color: 'blue',
			type: 'SHIRT',
		};
		let expected = { name: 'test clothing item', color: 'blue', type: 'SHIRT' };
		return testServer.put('/clothes').send(testClothes)
		return clothes.put(testClothes).then((record) => {
			console.log('test clothing item from DB: ', record);
			Object.keys(testClothes).forEach((key) => {
				expected(record[key]).toEqual(expected[key]);
			});
		});
	});
});

describe('delete clothes item', () => {
	it('can delete clothing item', () => {
		let testClothes = {
			brand: 'test clothiing item',
			color: 'blue',
			type: 'SHIRT',
		};
		let expected = { name: 'test clothing item', color: 'blue', type: 'SHIRT' };
		return testServer.delete('/clothes').send(testClothes)
		return clothes.delete(testClothes).then((record) => {
			console.log('test clothing item from DB: ', record);
			Object.keys(testClothes).forEach((key) => {
				expected(record[key]).toEqual(expected[key]);
			});
		});
	});
});
