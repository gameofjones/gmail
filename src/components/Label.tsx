import React, { FunctionComponent, useContext, useEffect } from "react"
import { css, cx } from "emotion"
import { Typography } from "./MaterialUI"
import { MailContext } from "../store/StoreProvider"
import * as Actions from "../store/actions"
import { Label } from "../models/gmail"
import * as Constants from "../constants"
import { getMessagesByLabelId } from "../api/MailApiMock"

interface LabelProps {
  label: Label,
}

const LabelComponent: FunctionComponent<LabelProps> = ({ label, children }) => {
  let { state, dispatch } = useContext(MailContext)
  const { name, messagesUnread } = label
  const selected = (state.selectedLabel?.name || "") === name

  useEffect(() => {
    let title = Constants.APP_TITLE
    if (state.selectedLabel && state.selectedLabel.messagesUnread) {
      title += ` (${state.selectedLabel.messagesUnread})`
    }

    window.document.title = title
  }, [state.selectedLabel])

  return (
    <div
      className={cx(styles.label, { [styles.selected]: selected })}
      onClick={async() => {
        const messages = await getMessagesByLabelId(label.id)

        Actions.setState(dispatch, { 
          selectedLabel: label,
          selectedMessage: undefined,
          labels: state.labels,
          messages 
        })
      }}
    >
      {children}
      <Typography variant="subtitle2" style={{ margin: "2px auto 0 4px", display: "flex", width: "100%" }} gutterBottom>
        <div style={{flex:1}}>{name}</div>
        {messagesUnread !== 0 && <div style={{ marginRight: "10px" }}>{messagesUnread}</div>}
      </Typography>
    </div>
  )
}

const styles = {
  label: css({
    display: "flex",
    alignItems: "center",
    color: "darkgray",
    padding: "5px 0",
    ":hover": {
      color: "#2979FF",
      cursor: "pointer",
    },
  }),
  selected: css({
    color: "#2979FF",
    fontWeight: "bold",
  })
}

export default LabelComponent
