
export const exerciseOptions = {
  method: 'GET',
  //url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': '2f8f39983amshe5aed2d2a4a7544p1104edjsn164f9812224c',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  }
};
//const axios = require('axios');

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

export const fetchData = async (url, options) => {
    const response = await fetch (url, options);
    const data = await response.json();

    return data;
}