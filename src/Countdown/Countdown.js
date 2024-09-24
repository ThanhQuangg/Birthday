// src/Countdown.js
import React, { useState, useEffect } from 'react';
import './Countdown.css';
import confetti from 'canvas-confetti';

const Countdown = ({ birthdayDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(birthdayDate));
  const [celebrate, setCelebrate] = useState(false);

  function calculateTimeLeft(birthday) {
    const now = new Date();
    const birthdayTime = new Date(birthday);
    return birthdayTime > now ? birthdayTime - now : 0; // Trả về số mili giây còn lại
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const newTimeLeft = Math.max(prevTime - 1000, 0);
        if (newTimeLeft === 0) {
          clearInterval(timer);  // Dừng timer khi đến 0
          setCelebrate(true);
          runFireworks(); // Kích hoạt pháo hoa khi countdown về 0  
        }
        return newTimeLeft;
      });
    }, 1000);

    return () => clearInterval(timer); // Dọn dẹp khi component bị hủy
  }, []);

  const runFireworks = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      hours,
      minutes,
      seconds,
    };
  };

  const { hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className={`countdown-container ${celebrate ? 'celebrate' : ''}`}>
      <h1>Đếm Ngược Đến Sinh Nhật</h1>
      {timeLeft > 0 ? (
        <p className="time-left">{`${hours} giờ ${minutes} phút ${seconds} giây còn lại`}</p>
      ) : (
        <div className="birthday-message">
          <p>Chúc mừng sinh nhật vợ yêu nòa!</p>
          <img src="cake.png" alt="Birthday Cake" />
          <div className="confetti"></div>
        </div>
      )}

    </div>

  );
};

export default Countdown;
