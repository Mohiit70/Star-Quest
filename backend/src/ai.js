const generateStory = async () => {
    return {
        scene: 'lab',
        story: "You find yourself in a quantum laboratory. Strange machines hum around you. What do you do?",
        choices: ["Examine the central machine", "Look for a computer terminal", "Check your pockets"],
        inventory: []
    };
};

const processAction = async (action, currentState) => {
    switch(currentState.scene) {
        case 'lab':
            if (action.includes('machine')) {
                return {
                    scene: 'machine',
                    story: "You approach the central machine. It's covered in blinking lights and has a small screen displaying quantum coordinates.",
                    choices: ["Press the big red button", "Try to read the coordinates", "Step back"],
                    inventory: currentState.inventory
                };
            } else if (action.includes('terminal')) {
                return {
                    scene: 'terminal',
                    story: "You find a computer terminal. It's requesting a password.",
                    choices: ["Try to guess the password", "Look around for password hints", "Return to the center of the lab"],
                    inventory: currentState.inventory
                };
            } else if (action.includes('pocket')) {
                return {
                    scene: 'lab',
                    story: "You check your pockets and find a strange key with quantum symbols.",
                    choices: ["Examine the key", "Look for a keyhole in the lab", "Ignore the key for now"],
                    inventory: [...currentState.inventory, "Quantum Key"]
                };
            }
            break;
    }
    return currentState;
};

module.exports = { generateStory, processAction };