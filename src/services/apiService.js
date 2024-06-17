import axios from 'axios';

const API_URL = 'https://api.unsplash.com';
const ACCESS_KEY = 'fH5rgNEj3o3GIckrjyhTRZu5tskgStGdPhq-g_5fYkA';

export const fetchImages = (query, page = 1) => {
  return axios.get(`${API_URL}/search/photos`, {
    params: {
      query,
      page,
      per_page: 6,
      client_id: ACCESS_KEY,
    },
  });
};

export const fetchImageDetails = (id) => {
  return axios.get(`${API_URL}/photos/${id}`, {
    params: {
      client_id: ACCESS_KEY,
    },
  });
};
