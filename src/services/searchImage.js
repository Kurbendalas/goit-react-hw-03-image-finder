import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY = '1GrwB5D6sgLL6rKnMHTFzDQoJAj6asnZVx';

export async function searchImages(inputValue, page) {
  const response = await axios.get(
    `${URL}?key=${KEY}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`
  );
  return response;
}