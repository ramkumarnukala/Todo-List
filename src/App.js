import { AppstoreFilled } from "@ant-design/icons";
import React from "react";
import styles from "./App.module.css";
import Board from "./Board";

function App() {
  return (
    <>
      <div className={styles.titleWrapper}>
        <AppstoreFilled />
        <h1>Task Manager</h1>
      </div>
      <Board />
    </>
  );
}

export default App;
