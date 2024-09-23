import React, { useState } from 'react';
import './Question.css';

const Question = () => {
  const [answered, setAnswered] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: '0', left: '0' });

  const handleAnswer = () => {
    setAnswered(true);
  };

  const handleNoHover = () => {
    const buttonWidth = 100; // Kích thước nút "No!" (tính bằng pixel)
    const buttonHeight = 40; // Kích thước nút "No!" (tính bằng pixel)

    // Tính toán vị trí ngẫu nhiên trong phạm vi không vượt ra ngoài
    const randomTop = Math.random() * (window.innerHeight - buttonHeight) + 'px';
    const randomLeft = Math.random() * (window.innerWidth - buttonWidth) + 'px';

    setNoButtonPosition({ top: randomTop, left: randomLeft });
  };

  return (
    <div className="question-container">
      {!answered ? (
        <>
          <p className="question-text">Hôm nay vợ yêu có vui không?</p>
          <button className="answer-button" onClick={handleAnswer}>Yes!</button>
          <button 
            className="answer-button no-button" 
            style={{ position: 'absolute', top: noButtonPosition.top, left: noButtonPosition.left }} 
            onMouseEnter={handleNoHover}
          >
            No!
          </button>
        </>
      ) : (
        <p className="answer-response">Glad to hear that! 🎉</p>
      )}
    </div>
  );
};

export default Question;
