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

    return (
        <>
            <Button onClick={playSequence} disabled={isPlayingSequence}>Play sequence</Button>
            <div className="game-grid">
                <Button id="red" className="grid-button" />
                <Button id="blue" className="grid-button" />
                <Button id="yellow" className="grid-button" />
                <Button id="green" className="grid-button" />
            </div>
        </>
    );
}