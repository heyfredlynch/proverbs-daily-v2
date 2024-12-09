import axios from 'axios';

const BIBLE_API_KEY = process.env.REACT_APP_BIBLE_API_KEY;
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const YOUTUBE_CHANNEL_ID = process.env.REACT_APP_YOUTUBE_CHANNEL_ID;

const getBibleVerse = async (verse) => {
    try {
        const response = await axios.get(`https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/verses/${verse}`, {
            headers: {
                'api-key': BIBLE_API_KEY
            }
        });
        return response.data.data;
    } catch (error) {
        console.error('Error fetching Bible verse:', error);
        throw error;
    }
};

const getYouTubeVideos = async () => {
    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
            params: {
                key: YOUTUBE_API_KEY,
                channelId: YOUTUBE_CHANNEL_ID,
                part: 'snippet,id',
                order: 'date',
                maxResults: 5,
                type: 'video'
            }
        });
        return response.data.items;
    } catch (error) {
        console.error('Error fetching YouTube videos:', error);
        throw error;
    }
};

export { getBibleVerse, getYouTubeVideos };