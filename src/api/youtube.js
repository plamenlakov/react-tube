import axios from 'axios';

const KEY = 'AIzaSyBGPYQffPWIez5fyBuK1aRj_dtZYlaODE8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: '5',
        key: KEY
    }
});