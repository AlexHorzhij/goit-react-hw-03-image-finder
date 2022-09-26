const axios = require('axios').default;

export async function getImages(search, page) {
    const KEY = '29157383-7b7a3db408c81f6fc8c1e0e94'
    const URL = 'https://pixabay.com/api/'
    const searchImage = `&q=${search}`
   try {
    const response = await axios.get(`${URL}?key=${KEY}${search && searchImage}&per_page=12&page=${page}`);
    return response;
  } catch (error) {
    console.error(error);
  }  
};