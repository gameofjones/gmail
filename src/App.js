import React from 'react';
import Input from '@material-ui/core/Input'
import SearchIcon from "@material-ui/icons/Search"
import InputAdornment from '@material-ui/core/InputAdornment'
import Typography from "@material-ui/core/Typography"
import './App.css';
import 'typeface-roboto';
import { css } from "emotion";
import { LabelPanel, EmailTab } from "./components"

const mockCustom = ["Receipts"]
const mockEmails = [
  {
    subject: "First Email",
    sender: "author@gmail.com",
    sent: "8:08 AM"
  },
  {
    subject: "Second Email with a longer name ya'llvgvggggggggg",
    sender: "Kiah Jones",
    sent: "Fri 3:20 PM"
  },
  {
    subject: "Third Email",
    sender: "Deep Badesha",
    sent: "Fri 3:20 PM"
  },
]

function App() {
  return (
    <div className={styles.app}>
      <Typography variant="h4" style={{ fontWeight: "bold", letterSpacing: "2px", padding: "15px 15px 15px 30px", color: "#2979FF"}}>
        G<label style={{ color: "red" }}>O</label><label style={{ color: "#FDD835" }}>J</label>
      </Typography>
      <div className={styles.toolbar}>
        <Input
          id="standard-adornment-amount"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon style={{ color: "#2979FF" }}/>
            </InputAdornment>
          }
        />
      </div>
      <div className={styles.panelContainer}> 
        <LabelPanel custom={mockCustom} />
        <div className={styles.emailPanel}>
          {
            mockEmails.map((email, index) => 
              <EmailTab
                index={index}
                subject={email.subject}
                sender={email.sender}
                sent={email.sent}
              />
            )
          }
        </div>
        <div className={styles.previewPanel}>
          <Typography variant="h5" gutterBottom>
            Lorem Ipsum
          </Typography>
        </div>
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
    color: "#2962FF",
    border: appBorder,
  }),
  panelContainer: css({
    height: "calc(100vh - 155px)",
    display: "flex",
    padding: "0 30px 0",
  }),
  emailPanel: css({
    flex: "0 400px",
    borderLeft: "1px solid #F4F4F4",
  }),
  previewPanel: css({
    flex: 1,
    borderLeft: appBorder,
    color: "#585858",
    padding: "20px 30px",
  }),
}
