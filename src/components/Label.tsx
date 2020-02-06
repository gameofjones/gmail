import React, { FunctionComponent, useContext, useEffect } from "react"
import { css, cx } from "emotion"
import Typography from "@material-ui/core/Typography"
import { MailContext } from "../store/StoreProvider"
import { setLabel, setEmails } from "../store/actions"
import { Label as LabelModel } from "../models/gmail"

interface LabelProps {
  label: LabelModel,
}

const Label: FunctionComponent<LabelProps> = ({ label, children }) => {
  let { state, dispatch } = useContext(MailContext)
  const { name, messagesUnread } = label
  const selected = state.selectedLabel.name === name

  useEffect(() => {
    let title = "GOJ Mail"
    if (state.selectedLabel.messagesUnread) {
      title += ` (${state.selectedLabel.messagesUnread})`
    }

    window.document.title = title
  }, [state.selectedLabel])

  return (
    <div
      className={cx(styles.label, { [styles.selected]: selected })}
      onClick={() => {
        setLabel(dispatch, label)
        setEmails(dispatch, label)
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

export default Label

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
