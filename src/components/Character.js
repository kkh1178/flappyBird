import React from "react";

const Character = ({ allRefs, characterTop }) => {
    return (
        <div
            className="character"
            ref={allRefs.character}
            style={{ top: `${characterTop}` }}
        ></div>
    );
};

export default Character;
