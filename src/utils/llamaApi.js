const API_KEY = 
const API_URL = 

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
      model: 'mixtral-8x7b-32768',
      messages: [
        { role: 'system', content: 'You are a creative storyteller for an interactive sci-fi adventure game.' },
        { role: 'user', content: prompt }
      ],
      max_tokens: 500,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  const generatedText = data.choices[0].message.content.trim();

  // Split the generated text into scene and choices
  const parts = generatedText.split('\n\nChoices:');
  const scene = parts[0].trim();
  const choicesText = parts.length > 1 ? parts[1] : '';
  const choices = choicesText.split('\n')
    .map(choice => choice.trim().replace(/^\d+\.\s*/, ''))
    .filter(choice => choice.length > 0);

  return { scene, choices };
}