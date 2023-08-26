
export const exerciseOptions = {
  method: 'GET',
  //url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': '2f8f39983amshe5aed2d2a4a7544p1104edjsn164f9812224c'
  }
};

export const youtubeOptions = {
  method: 'GET',
  //url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',
  headers: {
    'X-RapidAPI-Key': '2f8f39983amshe5aed2d2a4a7544p1104edjsn164f9812224c',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
    const response = await fetch (url, options);
    const data = await response.json();

    return data;
}