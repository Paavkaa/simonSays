import {Button} from "primereact/button";
import {useState} from "react";
import Game from "./Game.tsx";

export default function Content() {
    const [showGame, setShowGame] = useState(false)

    const handleClick = () => {
        setShowGame(true)
    }

    return (
        <>
            {showGame? <Game /> : <>
                <h1>Welcome, let's play SIMON SAYS</h1>
                <h2>How far can you go?</h2>

                <Button onClick={handleClick} size={"large"}>Start</Button>
            </>}
        </>
    )
}