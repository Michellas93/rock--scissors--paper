import { useEffect, useState } from "react";
import "./App.css";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import Controll from "./components/Controll/Controll";
import { WhoWon } from "./utils/logic";
import History from "./components/History/History";

const MAX_SCORE = 3;
const TIME_TO_RESET = 5;

function App() {
  const [chosen, setChosen] = useState();
  const [round, setRound] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);
  const [robotScore, setRobotScore] = useState(0);
  const [history, setHistory] = useState([]);
  const [time, setTime] = useState(TIME_TO_RESET);

  useEffect(() => {
    if (chosen != undefined) {
      const robotPlay = Math.floor(Math.random() * 3);
      const win = WhoWon(chosen, robotPlay);
      setHistory([...history, { player: chosen, robot: robotPlay }]);
      setChosen(undefined);
      setRound((prev) => prev + 1);
      if (win === 0) {
        setPlayerScore((prev) => prev + 1);
      } else if (win == 1) {
        setRobotScore((prev) => prev + 1);
      }
    }
  }, [chosen]);

  useEffect(() => {
    if (playerScore === MAX_SCORE || robotScore === MAX_SCORE) {
      const timer = setTimeout(() => {
        setRound(0);
        setChosen(undefined);
        setPlayerScore(0);
        setRobotScore(0);
        setHistory([]);
        setTime(TIME_TO_RESET);
      }, TIME_TO_RESET * 1000);

      const interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }
  }, [playerScore, robotScore]);

  return (
    <div>
      <h1>Rock-Paper-Scissors</h1>
      {playerScore === MAX_SCORE ? (
        <h3>Game over - player win, game will reset in {time}</h3>
      ) : robotScore === MAX_SCORE ? (
        <h3>Game over - robot win, game will reset in {time}</h3>
      ) : (
        <></>
      )}

      <Scoreboard
        playerScore={playerScore}
        robotScore={robotScore}
        round={round}
      />
      <div className="control-div">
        <Controll
          value={0}
          setChosen={setChosen}
          en={playerScore < MAX_SCORE && robotScore < MAX_SCORE}
        />
        <Controll
          value={1}
          setChosen={setChosen}
          en={playerScore < MAX_SCORE && robotScore < MAX_SCORE}
        />
        <Controll
          value={2}
          setChosen={setChosen}
          en={playerScore < MAX_SCORE && robotScore < MAX_SCORE}
        />
      </div>
      <div className="historyContainer ">
        {history.map((item, index) => (
          <History key={index} player={item.player} robot={item.robot} />
        ))}
      </div>
    </div>
  );
}

export default App;
