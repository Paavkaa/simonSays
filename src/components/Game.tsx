import '../css/game.css';
import { Button } from 'primereact/button';
import { useState, useEffect } from 'react';

export default function Game() {
    const [sequence, setSequence] = useState<string[]>([]);
    const [playerSequence, setPlayerSequence] = useState<string[]>([]);
    const [isPlayingSequence, setIsPlayingSequence] = useState(false);
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [finalScore, setFinalScore] = useState<number>(0);
    const [hasGameBeenPlayed, setHasGameBeenPlayed] = useState<boolean>(false);

    useEffect(() => {
        if (isGameStarted && sequence.length > 0) {
            playSequence();
        }
    }, [sequence]);

    const generateSequence = () => {
        const colors = ['red', 'blue', 'yellow', 'green'];
        const generatedColor = colors[Math.floor(Math.random() * 4)];
        const newSequence = [...sequence, generatedColor];
        setSequence(newSequence);
    };

    const startGame = () => {
        setPlayerSequence([]);
        setIsGameStarted(true);
        setFinalScore(0);
        setHasGameBeenPlayed(true);
        generateSequence();
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

    const checkSequence = (newPlayerSequence: string[]) => {
        for (let i = 0; i < newPlayerSequence.length; i++) {
            if (newPlayerSequence[i] !== sequence[i]) {
                return false;
            }
        }
        return true;
    };

    const roundMove = (color: string) => {
        const newPlayerSequence = [...playerSequence, color];
        setPlayerSequence(newPlayerSequence);

        if (!checkSequence(newPlayerSequence)) {
            setFinalScore(sequence.length - 1);
            setSequence([]);
            setPlayerSequence([]);
            setIsGameStarted(false);
            return;
        }

        if (newPlayerSequence.length === sequence.length) {
            setPlayerSequence([]);
            generateSequence();
        }
    };

    const roundCounter = sequence.length;

    return (
        <>
            <h6 className="round-counter">Round: {roundCounter}</h6>

            {!isGameStarted && (
                <>
                    <div className="start-dialog">
                        {hasGameBeenPlayed && <h6 className="final-score">Final Score: {finalScore}</h6>}
                        <Button className="start-button" onClick={startGame} disabled={isPlayingSequence}>Start</Button>
                    </div>
                    <div className="start-button-background"/>
                </>
            )}

            <div className="game-grid">
                <Button onClick={() => roundMove("red")} id="red" className="grid-button" />
                <Button onClick={() => roundMove("blue")} id="blue" className="grid-button" />
                <Button onClick={() => roundMove("yellow")} id="yellow" className="grid-button" />
                <Button onClick={() => roundMove("green")} id="green" className="grid-button" />
            </div>
        </>
    );
}