import React from 'react';

function Choices({ choices, onChoice }) {
  return (
    <div className="choices">
      {choices.map((choice, index) => (
        <button key={index} onClick={() => onChoice(choice)}>
          {choice}
        </button>
      ))}
    </div>
  );
}

export default Choices;