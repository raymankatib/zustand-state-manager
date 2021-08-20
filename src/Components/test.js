// const axios = require('axios');
// const fs = require('fs');

// const baseURL = 'https://cataas.com/cat?json=true';

// let arr = [];
// let num = 5;

// let promises = [];

// for (let i = 0; i <= num; i++) {
// 	arr.push(i);
// }

// async function apiCall() {
// 	const { data } = await axios.get(baseURL);
// 	// console.log(data);
// 	return data;
// }

// for (let j in arr) promises.push(apiCall());

// Promise.all(promises).then((values) => {
// 	fs.appendFile('resolut.txt', JSON.stringify(values), (err) => {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			console.log('Saved');
// 		}
// 	});
// });
