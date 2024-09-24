import React, { useState } from 'react';

import './RiddleGame.css'; 
import Countdown from '../Countdown/Countdown';

const riddles = [
    {
        question: "Ngày kỷ niệm tình yêu của chúng ta là khi nào?",
        options: ["Ngày 15 tháng 3", "Ngày 16 tháng 3", "Ngày 25 tháng 3", "Ngày 27 tháng 3"],
        answer: 2,
    },
    {
        question: "Tính đến ngày 25 tháng 9 năm 2024 đã là anniversary thứ bao nhiêu?",
        options: ["39", "42", "40", "41"],
        answer: 1,
    },
    {
        question: "Chuyến du lịch đầu tiên của chúng ta là ở đâu?",
        options: ["Đà Lạt", "Vũng Tàu", "Phú Quốc", "Hà Nội"],
        answer: 0,
    },
    {
        question: "Màu sắc yêu thích của anh là gì?",
        options: ["Xanh dương", "Xanh lá", "Trắng", "Vàng"],
        answer: 1,
    },
    {
        question: "Mùa nào em thích nhất?",
        options: ["Mùa xuân", "Mùa hạ", "Mùa thu", "Mùa đông"],
        answer: 2,
    },
    {
        question: "Vợ yêu nghĩ năm nay mình có quà sinh nhật không?",
        options: ["Có", "Có thể", "Chắc có", "Không"],
        answer: 0,
    },
    {
        question: "Vợ yêu nghĩ nó là cái gì?",
        options: ["Máy sấy Dyson", "Máy lọc không khí", "Máy triệt lông Halio", "Một con lego lấp lánh ánh đèn"],
        answer: 3,
    },
];

const RiddleGame = () => {
    const [currentRiddle, setCurrentRiddle] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [message, setMessage] = useState('');
    const [gameFinished, setGameFinished] = useState(false);
    const [showCountdown, setShowCountdown] = useState(false);

    const birthdayDate = "2024-09-25T00:00:00+07:00";


    const handleOptionClick = (index) => {
        setSelectedOption(index);
        setIsSubmitted(true);
        setMessage(index === riddles[currentRiddle].answer ? 'Chúc mừng! Vợ yêu đã trả lời đúng.' : 'Sai rồi! Vợ yêu hãy thử lại.');
    };

    const handleNext = () => {
        if (currentRiddle < riddles.length - 1) {
            setCurrentRiddle(currentRiddle + 1);
            setSelectedOption(null);
            setIsSubmitted(false);
            setMessage('');
        } else {
            setGameFinished(true); // Khi đã hết câu hỏi, đặt gameFinished thành true
        }
    };

    const handleCountdownClick = () => {
        setShowCountdown(true);
    };

    if (gameFinished) {
        return (
            <div>
                {showCountdown ? (
                    <Countdown birthdayDate={birthdayDate} />
                ) : (
                    <button onClick={handleCountdownClick}>Cùng nhau đếm ngược sinh nhật nào</button>
                )}
            </div>
        );
    }

    return (
        <div>
            <h1>Trò Chơi Đố Vui Cùng Huyền Trangg</h1>
            <p>{riddles[currentRiddle].question}</p>
            <div>
                {riddles[currentRiddle].options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleOptionClick(index)}
                        style={{
                            backgroundColor: isSubmitted && index === selectedOption
                                ? (index === riddles[currentRiddle].answer ? 'lightgreen' : 'lightcoral')
                                : 'white',
                            color: isSubmitted && index === selectedOption && index !== riddles[currentRiddle].answer ? 'white' : 'black',
                            margin: '5px',
                        }}
                    >
                        {option}
                    </button>
                ))}
            </div>
            {isSubmitted && (
                <div>
                    <p>{message}</p>
                    {selectedOption === riddles[currentRiddle].answer && (
                        <button onClick={handleNext}>Câu tiếp theo</button>
                    )}
                </div>
            )}
        </div>
    );
};

export default RiddleGame;
