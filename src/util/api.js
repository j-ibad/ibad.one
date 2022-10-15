import axios from 'axios';

import ENV from '@/util/env.js';


export default axios.create({
  baseURL: `${ENV.url.prot}://${ENV.url.apiRoot}`,
  headers: {'Content-Type': 'application/json'},
  cache: 'no-cache'
});