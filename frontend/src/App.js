//51864642
import {
  AppRoot,
  View,
  Panel,
  PanelHeader,
  Group,
  Header,
  CardGrid,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import { cards } from "./state/cards";
import GameCard from "./components/cards/GameCard";
import { useState } from "react";
import BackBtn from "./components/buttons/BackBtn";

import GameScreen from "./components/GameScreen";
import { snakeStart } from "./components/snake/snakeStart";
import { arcanoidStart } from "./components/arcanoid/arcanoidStart";
import { matchStart } from "./components/match/matchStart";

function App() {
  const [game, setGame] = useState("");

  return (
    <AppRoot>
      <View activePanel="main">
        <Panel id="main">
          <PanelHeader>
            Bug && Gluck {game && <BackBtn setGame={setGame} />}
          </PanelHeader>
          {!game ? (
            <Group
              mode="card"
              header={<Header mode="secondary">Mini games on JS</Header>}
            >
              <CardGrid size="s">
                {cards.map((card) => (
                  <GameCard key={card.id} card={card} setGame={setGame} />
                ))}
              </CardGrid>
            </Group>
          ) : game === "Snake" ? (
            <GameScreen startFunction={snakeStart} />
          ) : game === "Arcanoid" ? (
            <GameScreen startFunction={arcanoidStart} />
          ) : (
            <GameScreen startFunction={matchStart} />
          )}
        </Panel>
      </View>
    </AppRoot>
  );
}

export default App;
