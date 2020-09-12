import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-challenge-e9ec1.cloudfunctions.net/api' //the api (cloud function)
    // http://localhost:5001/challenge-e9ec1/us-central1/api
})

export default instance;
