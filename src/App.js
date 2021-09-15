import React, { useRef, useState, useEffect } from "react";

import "./App.css";
import Game from "./components/Game";
import Header from "./components/Header";

function App() {
    // Userefs to get an element by className
    let block = useRef();
    let character = useRef();
    let space = useRef();

    //Setting state
    const [spaceTop, setSpaceTop] = useState("-500");
    const [counter, setCounter] = useState(0);
    const [jumping, setJumping] = useState(0);
    const [jumpCount, setJumpCount] = useState(0);
    const [characterTop, setCharacterTop] = useState("100");
    const [play, setPlay] = useState(false);
    const [message, setMessage] = useState("Play");

    // play a game onClick handler
    const playGame = () => {
        if (!play) {
            setPlay(true);
            setMessage("Stop");
        } else {
            setPlay(false);
            setMessage("Play");
        }
    };

    // Creating an event listener to look for the the animation iteration and randomize the place where the space goes
    const onSpaceIteration = () => {
        // create a random number and then set the top of the space to that number
        let random = -(Math.random() * 300 + 150);
        setSpaceTop(random + "px");
        setCounter(counter + 1);
    };

    useEffect(() => {
        // Defining variables
        let characterTop = parseInt(
            window.getComputedStyle(character.current).getPropertyValue("top")
        );
        let blockLeft = parseInt(
            window.getComputedStyle(block.current).getPropertyValue("left")
        );
        let spaceTop = parseInt(
            window.getComputedStyle(space.current).getPropertyValue("top")
        );

        let cTop = -(500 - characterTop);
        const interval = setInterval(() => {
            if (
                characterTop > -480 ||
                (blockLeft < 20 &&
                    blockLeft > -50 &&
                    (cTop < spaceTop || cTop > spaceTop + 130))
            ) {
                console.log("Game over. Score:");
                setCharacterTop(100 + "px");
            }
        }, 10);
        return () => clearInterval(interval);
    }, [characterTop]);

    const jump = () => {
        setJumping(1);
        let jumpInterval = setInterval(() => {
            if (characterTop > 6 && jumpCount < 15) {
                setCharacterTop(characterTop - 5 + "px");
            }
            if (jumpCount > 20) {
                clearInterval(jumpInterval);
                setJumping(0);
                setJumpCount(0);
            }
            setJumpCount(jumpCount + 1);
        }, 10);
    };

    return (
        <>
            <Header></Header>
            <p>{counter}</p>

            <Game
                allRefs={{ block, character, space }}
                onSpaceIteration={onSpaceIteration}
                spaceTop={spaceTop}
                characterTop={characterTop}
                play={play}
            ></Game>
            <div>
                <button className="button" onClick={playGame}>
                    {message}
                </button>
            </div>
        </>
    );
}

export default App;
