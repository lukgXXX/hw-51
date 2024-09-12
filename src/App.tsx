import './App.css';
import React, { useState } from 'react';
import Ball from "./components/Balls/Ball.tsx";

const generateRandomNumbers = (): number[] => {
    const numbers: Set<number> = new Set();
    while (numbers.size < 5) {
        const randomNumber = Math.floor(Math.random() * (36 - 5 + 1)) + 5;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
};

const App: React.FC = () => {
    const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

    const handleNewNumbers = () => {
        setNumbers(generateRandomNumbers());
    };

    return (
        <div className="app">
            <h1>Lottery "5 из 36"</h1>
            <div className="balls-container">
                {numbers.map((num) => (
                    <Ball key={num} number={num} />
                ))}
            </div>
            <button onClick={handleNewNumbers}>New numbers</button>
        </div>
    );
};

export default App;
