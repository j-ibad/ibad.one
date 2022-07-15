import axios from 'axios';

export default axios.create({
  baseURL: 'https://ibad.one/',
  headers: {'Content-Type': 'application/json'},
  cache: 'no-cache'
});