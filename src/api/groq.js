import axios from 'axios';

const API_KEY = 'YOUR_GROQ_API_KEY';
const API_URL = 'https://api.groq.com/v1/completions';

export async function getAIResponse(prompt) {
  try {
    const response = await axios.post(
      API_URL,
      {
        model: 'llama2-70b-4096',
        prompt: prompt,
        max_tokens: 200,
        temperature: 0.7,
        top_p: 1,
        stop: ['\n\n'],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    const generatedText = response.data.choices[0].text;

    const storyEnd = generatedText.lastIndexOf('\n');
    const story = generatedText.substring(0, storyEnd).trim();
    const choices = generatedText.substring(storyEnd).trim().split('\n');

    return { story, choices };
  } catch (error) {
    console.error('Error fetching AI response:', error);
    return { story: 'An error occurred', choices: ['Restart'] };
  }
}