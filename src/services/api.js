import axios from 'axios';

axios.create({
  baseURL: 'https://api.github.com',
});

export default axios;
