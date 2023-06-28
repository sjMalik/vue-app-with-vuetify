import ezFetch from 'ez-fetch';

const API_URL = 'http://localhost:5000/api/v1/products';

export default {
    getProducts() {
       return ezFetch.get(API_URL);
    },
    getProduct(id) {
       return ezFetch.get(`${API_URL}/${id}`);
    },
};
