import React from 'react';
import TextField from '@material-ui/core/TextField';
import './App.css';
import 'typeface-roboto';
import { css } from "emotion";
import LabelPanel from "./components/LabelPanel"

const mockCustom = ["Receipts"]

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.toolbar}>
        <TextField id="standard-basic" label="Search" />
      </div>
      <div className={styles.panelContainer}>
        <LabelPanel custom={mockCustom} />
        <div className={styles.emailPanel}></div>
        <div className={styles.previewPanel}></div>
      </div>
    </div>
  );
}

export default App;

const appBorder = "2px solid #F4F4F4"

const styles = {
  app: css({

  }),
  toolbar: css({
    height: "80px",
    display: "flex",
    "align-items": "center",
    padding: "0 30px 0",
    backgroundColor: "#FCFCFA",
    border: appBorder,
  }),
  panelContainer: css({
    height: "calc(100vh - 80px)",
    display: "flex",
    padding: "0 30px 0",
  }),
  emailPanel: css({
    flex: "0 400px",
    backgroundColor: "#F9F9F8",
    borderLeft: "1px solid #F4F4F4"
  }),
  previewPanel: css({
    flex: 1,
    borderLeft: appBorder,
  }),
}
