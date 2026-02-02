import { useState } from 'react';
import confetti from 'canvas-confetti';
import './App.css';

function App() {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [yesPressed, setYesPressed] = useState(false);

  const handleYesClick = () => {
    setYesPressed(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff69b4', '#9b59b6', '#ffffff']
    });
    // Ensure this file is in your public folder!
    new Audio('./bestie-music.mp3').play().catch(e => console.log("Audio play failed"));
  };

  const moveNoButton = () => {
    // We subtract a bit more to ensure the button doesn't go off-screen
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 100);
    setNoPosition({ x, y });
  };

  return (
    <div className="galentine-container">
      {yesPressed ? (
        <div className="success-screen">
          {/* Your specific Giphy link added here */}
          <img 
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXM4d2NoaXFoa2R4OGRzZ3RnbDhjeGJhaXhjc25lcTZuMjFsdW4zbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WwNWngXlZ7y2t0PJ55/giphy.gif" 
            alt="Celebrating bears hugging" 
            className="success-gif"
          />
          <h1 className="text success-text">Yay! Besties Forever! 🎀✨</h1>
        </div>
      ) : (
        <div className="question-screen">
          <div className="photo-gallery">
            {/* Added a leading slash to help Vite find these in the public folder */}
            <img src="./bestie1.jpg" alt="Bestie 1" className="gallery-img" />
            <img src="./bestie2.jpg" alt="Bestie 2" className="gallery-img" />
            <img src="./bestie3.jpg" alt="Bestie 3" className="gallery-img" />
          </div>

          <h1 className="text">Will you be my Galentine? ❤️</h1>
          
          <div className="button-group">
            <button className="yes-button" onClick={handleYesClick}>
              Yes!
            </button>
            <button 
              className="no-button"
              onMouseEnter={moveNoButton}
              style={noPosition.x ? { 
                position: 'fixed', 
                left: `${noPosition.x}px`, 
                top: `${noPosition.y}px`,
                zIndex: 999 
              } : {}}
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;