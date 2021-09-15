import React from "react";

const Space = ({ allRefs, onSpaceIteration, spaceTop, play }) => {
    // console.log(spaceTop);
    return (
        <div
            className={`space ${play ? "block_animation" : ""}`}
            ref={allRefs.space}
            // onAnimationIteration event listener
            onAnimationIteration={onSpaceIteration}
            style={{ top: `${spaceTop}` }}
        ></div>
    );
};

export default Space;
