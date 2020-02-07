import 'typeface-roboto'
import React, { FunctionComponent, useState, useEffect, useContext } from 'react'
import Input from '@material-ui/core/Input'
import SearchIcon from "@material-ui/icons/Search"
import InputAdornment from '@material-ui/core/InputAdornment'
import Avatar from "@material-ui/core/Avatar"
import { css } from "emotion"
import { Logo, LabelPanel, MessageComponent, PreviewPanel } from "."
import { MailContextConsumer } from "../store/StoreProvider"
import { Message } from "../models/gmail"
import { Label as LabelModel } from "../models/gmail"
import { getLabels } from '../api/MailApiMock'
import { setMessages } from '../store/actions'
import { MailContext } from "../store/StoreProvider"

const AppComponent: FunctionComponent = () => {
  let { state, dispatch } = useContext(MailContext)
  const [labels, setLabels] = useState<LabelModel[]>([])

  useEffect(() => {
    if (labels.length === 0) {
      getLabels().then(apiLabels => setLabels(apiLabels))
      setMessages(dispatch, state.selectedLabel)
    }
  }, [labels, dispatch, state.selectedLabel])

  return (
    <MailContextConsumer>
      {(props) =>
        <>
          <div className={styles.header}>
            <Logo />
            <div className={styles.headerRight}>
              <Avatar className={styles.avatar}>SM</Avatar>
            </div>
          </div>
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
            <LabelPanel labels={labels} />
            <div className={styles.messagePanel}>
              {
                props.state.messages.map((message: Message, index: number) =>  {
                  return ( 
                    <MessageComponent
                      key={index}
                      index={index}
                      message={message}
                    />
                  )}
                )
              }
              {
                props.state.messages.length === 0 &&
                <div style={{ textAlign: "center" }}>
                  <img width="300px" src="https://cdn4.iconfinder.com/data/icons/flatified/512/envelope.png" />
                  <br />
                  <label>Nothing in {state.selectedLabel.name}!</label>
                </div>
              }
            </div>
            <PreviewPanel
              sender={"Kiah Jones"}
              recipients={["Madhu Rawat", "Deep Badesha"]}
              subject={"First Email"}
              body={""}
            />
          </div>
        </>
      }
    </MailContextConsumer>
  )
}

const appBorder = "2px solid #F4F4F4"

const styles = {
  header: css({
    display: "flex",
    position: "relative",
    boxShadow: "0 2px 7px 0 rgba(0, 0, 0, 0.1), 0 6px 28px 0 rgba(0, 0, 0, -0.81)"
  }),
  headerRight: css({
    paddingRight: "30px",
    alignItems: "center",
    display: "flex",
  }),
  headerLeft: css({
    flex: 1,
  }),
  avatar: css({
    marginLeft: "auto",
    alignItems: "center",
    background: "green !important",
    cursor: "pointer",
  }),
  toolbar: css({
    height: "80px",
    display: "flex",
    alignItems: "center",
    padding: "0 30px 0",
    backgroundColor: "#FCFCFA",
    color: "#2962FF",
    borderBottom: appBorder,
  }),
  panelContainer: css({
    height: "calc(100vh - 155px)",
    display: "flex",
    padding: "0 30px 0",
  }),
  messagePanel: css({
    flex: "0 400px",
    overflowY: "auto",
    borderLeft: "1px solid #F4F4F4",
  }),
}

export default AppComponent
