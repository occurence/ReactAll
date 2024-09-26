import axios from 'axios';

export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY= '45629582-77934467d6487ab876874c85e';
export const perPage = 12;
export const getAPI = async (query, page) => {
    const url = `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`;
    const response = await axios.get(url);
    return response.data;

}

//https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12