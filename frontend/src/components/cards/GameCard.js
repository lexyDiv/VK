import { Div, Card, Title } from "@vkontakte/vkui";
import React from "react";
import classes from "./Card.module.css";

function GameCard({ card, setGame }) {
  return (
    <Card
      mode="shadow"
      className={classes.card}
      onClick={() => setGame(card.name)}
    >
      <Div className={classes.card__div}>
        <Title level={1}>{card.name}</Title>
        <img
          src={card.image}
          alt="img"
          style={{
            height: "250px",
            maxWidth: '100%'
          }}
        />
        <Title className={classes.card__description} level={4}>
          {card.description}
        </Title>
      </Div>
    </Card>
  );
}

export default GameCard;
