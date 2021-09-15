import React from "react";

const Block = ({ allRefs, play }) => {
    return (
        <div
            className={`block ${play ? "block_animation" : ""}`}
            ref={allRefs.block}
        ></div>
    );
};

export default Block;
