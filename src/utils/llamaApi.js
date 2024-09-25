const API_KEY = 'your_llama_api_key_here';
const API_URL = 'https://api.llama.ai/v1/chat/completions';

export async function generateStory(story, character, choice = null) {
  const prompt = `
    Generate a short scene for a text-based adventure game called Star Quest.
    Story: ${story.title}
    Character: ${character.customName || character.name}
    ${choice ? `Previous choice: ${choice}` : 'This is the beginning of the story.'}
    
    Provide the scene description and 2-3 choices for the player.
  `;

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: 'text-davinci-002',
      prompt: prompt,
      max_tokens: 200,
    }),
  });

  const data = await response.json();
  const generatedText = data.choices[0].text.trim();

  const [scene, ...choicesText] = generatedText.split('\n\nChoices:');
  const choices = choicesText[0].split('\n').map(choice => choice.trim().replace(/^\d+\.\s*/, ''));

  return { scene, choices };
}