import axios from 'axios';

const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

//generate product description through api call
export const generateDescription = async ({ name, category, signal }) => {
    const res = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
            model: 'gpt-4o-mini',
            temperature: 0.7,
            messages: [
                {
                    role: 'system',
                    content:
                        'You are a concise guide who know MillerKnoll well. Write a brief, spoken paragraph (60-80 words) about the design history of the item. Be direct and engaging. Make sure you look up credible source.',
                },
                { role: 'user', content: `Item: ${name}. Category: ${category}.` },
            ],
        },
        {
            headers: {
                Authorization: `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
            signal,
        }
    );
    return res.data.choices[0].message.content.trim();
};

export const textToSpeech = async (text, signal) => {
    const res = await axios.post(
        'https://api.openai.com/v1/audio/speech',
        {
            model: 'tts-1',
            voice: 'alloy',
            speed: 1.1,
            input: text,
        },
        {
            headers: {
                Authorization: `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
            responseType: 'arraybuffer',
            signal,
        }
    );
    return new Blob([res.data], { type: 'audio/mpeg' });
};
