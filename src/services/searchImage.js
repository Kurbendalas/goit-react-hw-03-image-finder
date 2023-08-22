import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY = '18SHX7Cet2Yx9z6bEDNm9pnoS4xyckRPKB';

export async function searchImages(inputValue, page) {
  const response = await axios.get(
    `${URL}?key=${KEY}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`
  );
  return response;
}