// src/Countdown.js
import React, { useState, useEffect } from 'react';

const Countdown = ({ birthdayDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(birthdayDate));

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
          clearInterval(timer); // Dừng timer khi đến 0
        }
        return newTimeLeft;
      });
    }, 1000);

    return () => clearInterval(timer); // Dọn dẹp khi component bị hủy
  }, []);

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
    <div>
      <h1>Đếm Ngược Đến Sinh Nhật</h1>
      {timeLeft > 0 ? (
        <p>{`${hours} giờ ${minutes} phút ${seconds} giây còn lại`}</p>
      ) : (
        <p>Chúc mừng sinh nhật!</p>
      )}
    </div>
  );
};

export default Countdown;
