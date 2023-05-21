import React from "react";
import paper from "../../assets/images/paper.png";
import rock from "../../assets/images/rock.png";
import scissors from "../../assets/images/scissors.png";
import styles from "./History.module.css";
import { WhoWon } from "../../utils/logic";

const History = ({ player, robot }) => {
  return (
    <div className={styles.imgContainer}>
      <img
        className={
          WhoWon(player, robot) === 0
            ? styles.imgWin
            : WhoWon(player, robot) === 1
            ? styles.imgLose
            : styles.imgWin
        }
        src={player === 0 ? rock : player === 1 ? paper : scissors}
      ></img>
      <img
        className={
          WhoWon(player, robot) === 1
            ? styles.imgWin
            : WhoWon(player, robot) === 0
            ? styles.imgLose
            : styles.imgWin
        }
        src={robot === 0 ? rock : robot === 1 ? paper : scissors}
      ></img>
    </div>
  );
};

export default History;
