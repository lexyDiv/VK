/* eslint-disable no-unused-expressions */
import React, { useEffect, useRef } from "react";
import { Div } from "@vkontakte/vkui";
import { gameClear } from "../functions/gameClear";

function GameScreen({ startFunction }) {
  const canvas = useRef();

  useEffect(() => {
    startFunction(canvas.current);

    return () => {
      gameClear();
    };
  }, [canvas, startFunction]);

  return (
    <Div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <canvas id="canvas" width="800" height="600" ref={canvas} />
    </Div>
  );
}

export default GameScreen;
