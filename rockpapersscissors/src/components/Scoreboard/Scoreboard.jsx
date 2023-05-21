import React from "react";
import styles from "./Scoreboard.module.css";

function Scoreboard({ playerScore, robotScore, round }) {
  return (
    <div className={styles.container}>
      <div>
        <h3>Player</h3>
        <p>{playerScore}</p>
      </div>
      <div>
        <h4>Round</h4>
        <p>{round}</p>
      </div>
      <div>
        <h3>Robot</h3>
        <p>{robotScore}</p>
      </div>
    </div>
  );
}

export default Scoreboard;
