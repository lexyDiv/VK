import { Button } from "@vkontakte/vkui";
import React from "react";

function BackBtn({ setGame }) {
  return (
    <Button
      style={{
        margin: "30px",
      }}
      onClick={() => setGame('')}
    >
      Go back
    </Button>
  );
}

export default BackBtn;
