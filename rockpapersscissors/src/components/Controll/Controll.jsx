import React from "react";
import paper from "../../assets/images/paper.png";
import rock from "../../assets/images/rock.png";
import scissors from "../../assets/images/scissors.png";
import styles from "./Controll.module.css";

function Controll({ value, setChosen, en }) {
  return (
    <button
      className={styles.button}
      onClick={() => {
        if (en) {
          setChosen(value);
        }
      }}
    >
      <img
        src={value === 0 ? rock : value == 1 ? paper : scissors}
        alt="icon"
      />
    </button>
  );
}

export default Controll;
