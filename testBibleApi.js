import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const BIBLE_API_KEY = process.env.REACT_APP_BIBLE_API_KEY;

const testBibleAPI = async () => {
    try {
        console.log('Testing Bible API...');
        
        const response = await axios.get('https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/verses/PRO.1.7', {
            headers: {
                'api-key': BIBLE_API_KEY
            }
        });
        
        console.log('Success! Here is Proverbs 1:7:');
        console.log('Content:', response.data.data.content);
        return response.data;
    } catch (error) {
        console.error('Bible API test failed:', error.message);
        if (error.response) {
            console.error('Error details:', error.response.data);
        }
    }
};

// Run the test
console.log('Starting Bible API test...\n');
testBibleAPI();