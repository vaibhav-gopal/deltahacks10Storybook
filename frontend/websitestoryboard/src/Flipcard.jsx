import React, { useState } from 'react';
import './flipcard.css'; // You can create a separate CSS file for styling

const FlipCard = ({ question, answer }) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <p>{question}</p>
        </div>
        <div className="flip-card-back">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;