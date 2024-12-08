import axios from 'axios';

const BIBLE_API_KEY = process.env.REACT_APP_BIBLE_API_KEY;
const BIBLE_BASE_URL = 'https://api.scripture.api.bible/v1';

const getBibleVerse = async (verse) => {
    try {
        const response = await axios.get(`${BIBLE_BASE_URL}/bibles/de4e12af7f28f599-02/verses/${verse}`, {
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