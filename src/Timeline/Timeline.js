import React, { useEffect, useState } from 'react';
import './Timeline.css'; // Import file CSS cho styling
import RiddleGame from '../RiddleGame/RiddleGame';

const journeyData = [
    { year: 2019, image: "1.jpg", text: "Huyền Trang 2019." },
    { year: 2020, image: "2.jpg", text: "Huyền Trang 2020." },
    { year: 2021, image: "3.jpg", text: "Huyền Trang 2021." },
    { year: 2022, image: "4.jpg", text: "Huyền Trang 2022." },
    { year: 2023, image: "5.jpg", text: "Huyền Trang 2023." },
    { year: 2024, image: "6.jpg", text: "Huyền Trang 2024." },
];

const Timeline = () => {
    const [visibleIndex, setVisibleIndex] = useState(0);
    const [showTimeline, setShowTimeline] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleIndex((prevIndex) => {
                const newIndex = (prevIndex + 1) % journeyData.length;
                // Kiểm tra nếu đã lặp qua tất cả ảnh thì hiển thị RiddleGame
                if (newIndex === 0) {
                    setShowTimeline(true);
                    clearInterval(interval); // Dừng interval sau khi hoàn thành
                }
                return newIndex;
            });
        }, 10000); // Thay đổi mỗi 1 giây

        return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
    }, []);

    return (
        <div className="timeline">
            {!showTimeline ? (
                <>
                    {journeyData.map((item, index) => (
                        <div key={index} className={`timeline-item ${index === visibleIndex ? 'show' : ''}`}>
                            <div className="timeline-content">
                                <img src={item.image} alt={`Hình ảnh năm ${item.year}`} />
                                <div className="timeline-text">
                                    {/* <h3>{item.year}</h3> */}
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            ) : (
                <RiddleGame />
            )}
        </div>
    );
};

export default Timeline;
