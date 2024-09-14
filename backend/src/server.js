const express = require('express');
const cors = require('cors');
const { generateStory, processAction } = require('./ai');

const app = express();
app.use(cors());
app.use(express.json());

let gameState = {
    scene: 'intro',
    story: '',
    choices: [],
    inventory: []
};

app.post('/start', async (req, res) => {
    gameState = await generateStory();
    res.json(gameState);
});

app.post('/action', async (req, res) => {
    const { action } = req.body;
    gameState = await processAction(action, gameState);
    res.json(gameState);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));