'use strict';

const supergoose = require('@code-fellows/supergoose');
const { app } = require('../src/server.js');
const testServer = supergoose(app);

describe('Food Collection', () => {
	it('can create a new food item', () => {
		let testFood = { name: 'testfood item', calories: 9999, type: 'VEG' };
		let expected = { name: 'test food item', calories: 9999, type: 'VEG' };
		return testServer.post('/food').send(testFood)
		.then(results => {
			console.log(results.body);
		})
	});
});

// it('can get a food item', () => {
// 	let testFood = { name: 'test food item', calories: 9999, type: 'VEG' };
// 	let expected = { name: 'test food item', calories: 9999, type: 'VEG' };

// 	return food.create(testFood).then((record) => {
// 		return food.get(record._id).then((item) => {
// 			Object.keys(testFood).forEach((key) => {
// 				expected(item[key]).toEqual(expected[key]);
// 			});
// 		});
// 	});
// });

// describe('Clothes Collection', () => {
// 	it('can create a new clothing item', () => {
// 		let testClothes = {
// 			brand: 'test clothiing item',
// 			color: 'blue',
// 			type: 'SHIRT',
// 		};
// 		let expected = { name: 'test clothing item', color: 'blue', type: 'SHIRT' };
// 		return clothes.create(testClothes).then((record) => {
// 			console.log('test clothing item from DB: ', record);
// 			Object.keys(testClothes).forEach((key) => {
// 				expected(record[key]).toEqual(expected[key]);
// 			});
// 		});
// 	});
// });

// it('can get a clothing item', () => {
// 	let testClothes = {
// 		brand: 'test clothing item',
// 		color: 'blue',
// 		type: 'SHIRT',
// 	};
// 	let expected = { brand: 'test clothing item', color: 'blue', type: 'SHIRT' };

// 	return clothes.create(clothesFood).then((record) => {
// 		return clothes.get(record._id).then((item) => {
// 			Object.keys(testClothes).forEach((key) => {
// 				expected(item[key]).toEqual(expected[key]);
// 			});
// 		});
// 	});
// });
