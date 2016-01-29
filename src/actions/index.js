import axios from 'axios';

export const FETCH_TOPICS = 'FETCH_TOPCIS';

const ROOT_URL = 'https://api.imgur.com/3/topics/defaults';
const API_KEY = '0c81f59f19061f5';


export function fetchTopics() {
    const request = axios.get(`${ROOT_URL}`, {
        headers: {
        'Authorization': `Client-ID ${API_KEY}`
      }
    });

    return {
        type: FETCH_TOPICS,
        payload: request
    }
}
