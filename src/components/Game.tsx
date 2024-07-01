import '../css/game.css';
import { Button } from 'primereact/button';
import { useState, useEffect } from 'react';

export default function Game() {
    const [sequence, setSequence] = useState<string[]>([]);
    const [playerSequence, setPlayerSequence] = useState<string[]>([]);
    const [isPlayingSequence, setIsPlayingSequence] = useState(false);

    useEffect(() => {
        generateSequence();
    }, []);

    const generateSequence = () => {
        const colors = ['red', 'blue', 'yellow', 'green'];
        const newSequence: string[] = [];

        for (let i = 0; i < 10; i++) {
            const randomIndex = Math.floor(Math.random() * 4);
            newSequence.push(colors[randomIndex]);
        }

        setSequence(newSequence);
    };

    const playSequence = () => {
        setIsPlayingSequence(true);
        let i = 0;
        const interval = setInterval(() => {
            const color = sequence[i];
            flashButton(color);
            i++;
            if (i >= sequence.length) {
                clearInterval(interval);
                setIsPlayingSequence(false);
            }
        }, 1000);
    };

    const flashButton = (color: string) => {
        const button = document.getElementById(color);
        if (button) {
            button.classList.add('flash');
            setTimeout(() => {
                button.classList.remove('flash');
            }, 500);
        }
    };

    const addToPlayerSequence = (color: string) => {
        const newPlayerSequence = [...playerSequence, color];
        setPlayerSequence(newPlayerSequence);

        if (!checkSequence(newPlayerSequence)) {
            alert('Game over');
        } else if (newPlayerSequence.length === sequence.length) {
            alert('Congratulations! You completed the sequence.');
        }
    };

    const checkSequence = (newPlayerSequence: string[]) => {
        for (let i = 0; i < newPlayerSequence.length; i++) {
            if (newPlayerSequence[i] !== sequence[i]) {
                return false;
            }
        }
        return true;
    };

    console.log(sequence);
    console.log(playerSequence);

    return (
        <>
            <Button onClick={playSequence} disabled={isPlayingSequence}>Play sequence</Button>
            <div className="game-grid">
                <Button onClick={() => addToPlayerSequence("red")} id="red" className="grid-button" />
                <Button onClick={() => addToPlayerSequence("blue")} id="blue" className="grid-button" />
                <Button onClick={() => addToPlayerSequence("yellow")} id="yellow" className="grid-button" />
                <Button onClick={() => addToPlayerSequence("green")} id="green" className="grid-button" />
            </div>
        </>
    );
}