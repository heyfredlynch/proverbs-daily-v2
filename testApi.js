import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const YOUTUBE_CHANNEL_ID = process.env.REACT_APP_YOUTUBE_CHANNEL_ID;

const testYouTubeAPI = async () => {
    try {
        console.log('Testing YouTube API...');
        
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                key: YOUTUBE_API_KEY,
                channelId: YOUTUBE_CHANNEL_ID,
                part: 'snippet,id',
                order: 'date',
                maxResults: 5,
                type: 'video'
            }
        });
        console.log('Success! Found', response.data.items.length, 'videos');
        response.data.items.forEach(video => {
            console.log(`- ${video.snippet.title} (${video.snippet.publishTime})`);
        });
        return response.data.items;
    } catch (error) {
        console.error('YouTube API test failed:', error.message);
        if (error.response) {
            console.error('Error details:', error.response.data);
        }
    }
};

// Run the test
testYouTubeAPI();