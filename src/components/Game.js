import React from "react";
import Character from "./Character";
import Space from "./Space";
import Block from "./Block";

const Game = ({ allRefs, onSpaceIteration, spaceTop, characterTop, play }) => {
    return (
        <div className="game">
            <Block allRefs={allRefs} play={play}></Block>
            <Space
                allRefs={allRefs}
                onSpaceIteration={onSpaceIteration}
                spaceTop={spaceTop}
                characterTop={characterTop}
                play={play}
            ></Space>
            <Character allRefs={allRefs}></Character>
        </div>
    );
};

export default Game;
