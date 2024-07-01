import 'primereact/resources/themes/lara-dark-purple/theme.css';
import 'primereact/resources/primereact.min.css';
import Menu from './components/Menu';
import Game from "./components/Game.tsx";
import {useState} from "react";

function App() {
    const [gameResults, setGameResults] = useState<{ position: number, score: number }[]>([]);

    const addGameResult = (score: number) => {
        const newGameResults = [...gameResults, { position: gameResults.length + 1, score }];
        setGameResults(newGameResults);
    }

    return (
        <div>
            <Menu gameResults={gameResults} />
            <div className="content">
                <Game addGameResult={addGameResult} />
            </div>
        </div>
    );
}

export default App;