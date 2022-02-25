import axios from 'axios';

const instance = axios.create({
    // baseURL: 'https://petsgroomer-test.nextbitsolution.com/api/'
    baseURL: 'https://staging.planipets.com/api/'
    // baseURL: "http://localhost:8000/api/"
    
});

export default instance;