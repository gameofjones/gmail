import 'typeface-roboto'
import React, { FunctionComponent, useState, useEffect, useContext } from 'react'
import { Avatar } from "./MaterialUI"
import { css } from "emotion"
import { Logo, LabelPane, MessagePane, RightPaneContainer, Toolbar } from "."
import { MailContextConsumer } from "../store/StoreProvider"
import { Label as LabelModel } from "../models/gmail"
import { getLabels } from '../api/MailApiMock'
import { setMessages } from '../store/actions'
import { MailContext } from "../store/StoreProvider"

const AppComponent: FunctionComponent = () => {
  let { state, dispatch } = useContext(MailContext)
  const { selectedLabel, selectedMessage, messages } = state
  const [labels, setLabels] = useState<LabelModel[]>([])

  useEffect(() => {
    if (labels.length === 0) {
      getLabels().then(apiLabels => setLabels(apiLabels))
      setMessages(dispatch, state.selectedLabel)
    }
  }, [labels, dispatch, state.selectedLabel])

  return (
    <MailContextConsumer>
      {() =>
        <>
          <div className={styles.header}>
            <Logo />
            <div className={styles.headerRight}>
              <Avatar className={styles.avatar}>SM</Avatar>
            </div>
          </div>
          <Toolbar />
          <div className={styles.panes}> 
            <LabelPane labels={labels} />
            <MessagePane selectedLabel={selectedLabel} messages={messages} />
            <RightPaneContainer selectedMessage={selectedMessage} messages={messages} />
          </div>
        </>
      }
    </MailContextConsumer>
  )
}

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
  panes: css({
    height: "calc(100vh - 155px)",
    display: "flex",
    padding: "0 30px 0",
  }),
}

export default AppComponent
