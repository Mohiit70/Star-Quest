const API_KEY = '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';
const API_URL = 'https://api.groq.com/openai/v1/chat/completions';

export async function generateStory(story, character, choice = null) {
  const prompt = `
    Generate a short scene for a text-based adventure game called Star Quest.
    Story: ${story.title}
    Character: ${character.customName || character.name}
    ${choice ? `Previous choice: ${choice}` : 'This is the beginning of the story.'}
    
    Provide a brief scene description (2-3 sentences) and two choices for the player.
    Format the response as follows:
    Scene: [Scene description]
    Choice 1: [First choice]
    Choice 2: [Second choice]
  `;

  try {
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
        max_tokens: 300,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const generatedText = data.choices[0].message.content.trim();

    const lines = generatedText.split('\n');
    const scene = lines.find(line => line.startsWith('Scene:')).replace('Scene:', '').trim();
    const choice1 = lines.find(line => line.startsWith('Choice 1:')).replace('Choice 1:', '').trim();
    const choice2 = lines.find(line => line.startsWith('Choice 2:')).replace('Choice 2:', '').trim();

    return { scene, choices: [choice1, choice2] };
  } catch (error) {
    console.error('Error generating story:', error);
    return { scene: 'Error generating story', choices: ['Try again', 'Start over'] };
  }
}
