import React, { useState, useEffect } from "react";
import "./StudyMatch.css";
import { Hand } from "lucide-react";

// ==================== LEVEL DATA ====================
const levelData = {
  1: [
    { id: 1, text: "Atom", match: "Smallest unit of matter" },
    { id: 2, text: "Smallest unit of matter", match: "Atom" },
    { id: 3, text: "Gravity", match: "Force of attraction" },
    { id: 4, text: "Force of attraction", match: "Gravity" },
    { id: 5, text: "Evaporation", match: "Liquid to gas" },
    { id: 6, text: "Liquid to gas", match: "Evaporation" },
    { id: 7, text: "Condensation", match: "Gas to liquid" },
    { id: 8, text: "Gas to liquid", match: "Condensation" },
  ],
  2: [
    { id: 1, text: "Osmosis", match: "Movement of water through a membrane" },
    { id: 2, text: "Movement of water through a membrane", match: "Osmosis" },
    { id: 3, text: "Condensation", match: "Gas to liquid" },
    { id: 4, text: "Gas to liquid", match: "Condensation" },
    { id: 5, text: "Friction", match: "Force that resists motion" },
    { id: 6, text: "Force that resists motion", match: "Friction" },
    { id: 7, text: "Melting", match: "Solid to liquid" },
    { id: 8, text: "Solid to liquid", match: "Melting" },
    { id: 9, text: "Sublimation", match: "Solid to gas" },
    { id: 10, text: "Solid to gas", match: "Sublimation" },
    { id: 11, text: "Molecule", match: "Group of atoms bonded together" },
    { id: 12, text: "Group of atoms bonded together", match: "Molecule" },
  ],
  3: [
    { id: 1, text: "Photosynthesis", match: "Light to chemical energy" },
    { id: 2, text: "Light to chemical energy", match: "Photosynthesis" },
    { id: 3, text: "Mitochondria", match: "Powerhouse of the cell" },
    { id: 4, text: "Powerhouse of the cell", match: "Mitochondria" },
    { id: 5, text: "Diffusion", match: "Particles from high to low concentration" },
    { id: 6, text: "Particles from high to low concentration", match: "Diffusion" },
    { id: 7, text: "DNA", match: "Genetic information carrier" },
    { id: 8, text: "Genetic information carrier", match: "DNA" },
    { id: 9, text: "Neuron", match: "Nerve cell transmitting impulses" },
    { id: 10, text: "Nerve cell transmitting impulses", match: "Neuron" },
    { id: 11, text: "Atom", match: "Basic unit of a chemical element" },
    { id: 12, text: "Basic unit of a chemical element", match: "Atom" },
    { id: 13, text: "Friction", match: "Resists motion between surfaces" },
    { id: 14, text: "Resists motion between surfaces", match: "Friction" },
    { id: 15, text: "Evaporation", match: "Liquid to vapor" },
    { id: 16, text: "Liquid to vapor", match: "Evaporation" },
  ],
};

// ==================== GAME COMPONENT ====================
const StudyMatchGame = ({ level, setLevel}) => {

  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [won, setWon] = useState(false);

  useEffect(() => {
    const shuffled = [...levelData[level]].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  }, [level]);

  useEffect(() => {
    if (matched.length === cards.length && cards.length > 0) setWon(true);
  }, [matched, cards]);

  const handleFlip = (card) => {
    if (flipped.length === 2 || flipped.includes(card.id) || matched.includes(card.id)) return;
    const newFlipped = [...flipped, card.id];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      const [first, second] = newFlipped.map((id) => cards.find((c) => c.id === id));
      if (first.match === second.text) setMatched([...matched, first.id, second.id]);
      setTimeout(() => setFlipped([]), 800);
    }
  };

  const restart = () => {
    setMatched([]);
    setFlipped([]);
    setWon(false);
    setMoves(0);
    setCards([...levelData[level]].sort(() => Math.random() - 0.5));
  };

  return (
    <div className="study-match">
      <h2 className="yes">Study Match — Level {level}</h2>
      <p className="subtitle">Match the terms with their meanings!</p>

      <div className="game-board" data-cards={cards.length}>
        {cards.map((card) => {
          const isFlipped = flipped.includes(card.id) || matched.includes(card.id);
          return (
            <div
              key={card.id}
              className={`card ${isFlipped ? "flipped" : ""}`}
              onClick={() => handleFlip(card)}
            >
              <div className="card-inner">
                <div className="card-front">❓</div>
                <div className="card-back">{card.text}</div>
              </div>
            </div>
          );
        })}
      </div>

      <p>Moves: {moves}</p>

      {won && (
        <div className="win-message">
          <h3>🎉 Great job!</h3>
          <button onClick={restart}>Play Again</button>
          {level < 3 && (
          <button onClick={() => setLevel(level + 1)} className="next-level-btn">
          Next Level →
          </button>
    )}

        </div>
      )}
    </div>
  );
};

// ==================== LEVEL SELECTOR ====================
const StudyMatch = () => {
  const [level, setLevel] = useState(null);

  return (
    <div className="study-match">
      {level ? (
        <>
          <button className="back-btn" onClick={() => setLevel(null)}>⬅ Back</button>
          <StudyMatchGame key = {level }level={level} setLevel={setLevel} />
        </>
      ) : (
        <div className="level-selector">
          <h1>Study Match</h1>
          <p className="subtitle">Select a level to begin!</p>

          <div className="level-map">

            <div className="level-buttons">
              <button class="button-with-icon" onClick={() => setLevel(1)}>
                <svg
                class="icon"
                id="Play"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="color000000 svgShape"
                  fill="#ffffff"
                  d="M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z"
                ></path>
              </svg>
              <span class="text">Level 1</span>
            </button>
                        <button class="button-with-icon" onClick={() => setLevel(2)}>
              <svg
                class="icon"
                id="Play"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="color000000 svgShape"
                  fill="#ffffff"
                  d="M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z"
                ></path>
              </svg>
              <span class="text">Level 2</span>
            </button>
                        <button class="button-with-icon" onClick={() => setLevel(3)}>
              <svg
                class="icon"
                id="Play"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="color000000 svgShape"
                  fill="#ffffff"
                  d="M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z"
                ></path>
              </svg>
              <span class="text">Level 3</span>
            </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default StudyMatch;
