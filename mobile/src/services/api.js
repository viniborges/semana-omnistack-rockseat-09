import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://xd-2g2.anonymous.mobile.exp.direct:3333',
    baseURL: 'http://localhost:3333',
});

export default api;