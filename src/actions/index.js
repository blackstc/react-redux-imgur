import axios from 'axios';

export const FETCH_TOPICS = 'FETCH_TOPCIS';
export const FETCH_IMAGES = 'FETCH_IMAGES';
export const FETCH_IMAGE = 'FETCH_IMAGE';

const ROOT_URL = 'https://api.imgur.com/3/';
const API_KEY = '0c81f59f19061f5';
const HEADERS = { headers: { 'Authorization': `Client-ID ${API_KEY}` } };


export function fetchTopics() {
    const request = axios.get(`${ROOT_URL}topics/defaults`, HEADERS);

    return {
        type: FETCH_TOPICS,
        payload: request
    }
}

export function fetchImages(id) {
    const request = axios.get(`${ROOT_URL}topics/${id}`, HEADERS);

    return {
        type: FETCH_IMAGES,
        payload: request
    }
}

export function fetchImage(id) {
    const request = axios.get(`${ROOT_URL}gallery/image/${id}`, HEADERS);

    return {
        type: FETCH_IMAGE,
        payload: request
    }
}
