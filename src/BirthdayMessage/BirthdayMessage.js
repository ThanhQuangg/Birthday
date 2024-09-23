import React, { useState, useEffect } from 'react';
import './BirthdayMessage.css';
import RiddleGame from '../RiddleGame';
import Timeline from '../Timeline';


const messages = [
  "生日快乐老婆",
  "祝老婆手里有钱，心里有我!",
  "祝老婆越来越漂亮.",
  "祝你每天都很快乐和平安.",
  "我爱你!!!",
  "Chúc mừng sinh nhật vợ yêu nha!!!",
  "Chúc vợ yêu sinh nhật vui vẻ!",
  "Chúc vợ yêu mãi mãi có được anh!",
  "Chúc vợ yêu sẽ luôn nhận được những điều tốt lành.",
  "Anh yêu vợ nòa!!!",
  "Bây giờ chào mừng vợ yêu tới với trò chơi đố vui"
];

function BirthdayMessages() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [showQuestion, setShowQuestion] = useState(false);

  useEffect(() => {
    if (currentMessageIndex < messages.length - 1) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        const nextIndex = currentMessageIndex + 1;
        setCurrentMessageIndex(nextIndex);
        setIsVisible(true);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      // Sau khi hiển thị câu cuối cùng, chuyển sang hiển thị Question
      const timer = setTimeout(() => {
        setShowQuestion(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [currentMessageIndex]);

  

  return (
    <div className="message-container">
      {!showQuestion ? (
        <>
          {isVisible && (
            <h1 className={`message ${isVisible ? 'fade-in' : 'fade-out'}`}>
              {messages[currentMessageIndex]}
            </h1>
          )}
        </>
      ) : (
        <Timeline /> 
      )}
    </div>
  );
}

export default BirthdayMessages;
