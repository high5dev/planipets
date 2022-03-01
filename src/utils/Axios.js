import axios from 'axios';

const instance = axios.create({
    // baseURL: 'https://petsgroomer-test.nextbitsolution.com/api/'
    baseURL: 'https://app.planipets.com/api/'
    // baseURL: "http://localhost/planipets.com/api/"
    
});

export default instance;