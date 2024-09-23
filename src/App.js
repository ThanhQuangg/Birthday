import React from 'react';
import BirthdayMessage from './BirthdayMessage/BirthdayMessage';
import Question from './Question';
import './App.css';
import RiddleGame from './RiddleGame';
import Countdown from './Countdown';

function App() {
  return (
    <div className="App">
      <video autoPlay loop muted className="background-video">
        <source src="/birthday-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <audio controls autoPlay>
        <source src="music.mp3" type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
      <div className="content">
        <BirthdayMessage />
        {/* <Question /> */}
        <RiddleGame />
        <Countdown />
      </div>
    </div>
  );
}

export default App;
