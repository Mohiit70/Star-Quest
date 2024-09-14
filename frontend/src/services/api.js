const API_URL = 'http://localhost:5000';

export const startGame = async () => {
  const response = await fetch(`${API_URL}/start`, { method: 'POST' });
  return response.json();
};

export const makeChoice = async (action) => {
  const response = await fetch(`${API_URL}/action`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action })
  });
  return response.json();
};