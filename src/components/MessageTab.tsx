import React, { FunctionComponent, useState, useEffect } from "react"
import { css, cx } from "emotion"
import Typography from "@material-ui/core/Typography"
import AttachFileIcon from "@material-ui/icons/AttachFile"
import { Message, MessagePartHeader } from "../models/gmail"

const HEADERS = {
  SUBJECT: "subject",
  FROM: "from",
}

interface MessageComponentProps {
  index: number
  message: Message
  sent: string,
  selected?: boolean,
}

const getMessageHeader = (name: string, headers?: MessagePartHeader[]) => {
  if (!headers) return undefined
  const header = headers.find(header => header.name === name)

  if (!header) return undefined
  return header.value
}

const MessageComponent: FunctionComponent<MessageComponentProps> = ({ index, message, sent, selected }) => {
  const [isSelected, setSelected] = useState(selected)
  const [subject, setSubject] = useState("")
  const [from, setFrom] = useState("")

  useEffect(()=> {
    if (message.payload) {
      const { headers } = message.payload
      const subject = getMessageHeader(HEADERS.SUBJECT, headers)
      const from = getMessageHeader(HEADERS.FROM, headers)

      if (subject) setSubject(subject)
      if (from) setFrom(from)
    }
  },[message.payload])

  return (
    <div
      className={cx(styles.message, { [styles.altBackground]: index%2 === 0 })}
      onClick={() => setSelected(!isSelected)}
    >
      <div className={cx(styles.leftSide, { [styles.selected]: isSelected })} />
      <div className={styles.contents}>
        <div style={{ flex: 1 }}>
          <label className={styles.subject}>{subject}</label>
          <Typography
            variant="caption"
            display="block"
            style={styles.sender}
            gutterBottom>
            {from}
          </Typography>
        </div>
        <div className={styles.rightSide}>
          <AttachFileIcon />
          <Typography
            variant="caption"
            display="block"
            style={styles.sender}
            gutterBottom>
            {sent}
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default MessageComponent

const styles = {
  message: css({
    display: "flex",
    cursor: "pointer",
    backgroundColor: "#F9F9F8",
    ":hover": {
      backgroundColor: "#BBDEFB"
    },
  }),
  altBackground: css({
    backgroundColor: "#F1F1F1",
  }),
  contents: css({
    flex: 1,
    display: "flex",
    padding: "20px 20px 10px 20px",
    color: "#585858",
  }),
  subject: css({
    padding: "10px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "232px",
    display: "block",
    cursor: "pointer",
  }),
  sender: {
    padding: "10px 10px 10px 12px",
  },
  leftSide: css({
    flex: "0 3px",
  }),
  rightSide: css({
    flex: "0 90px",
    alignItems: "center",
    display: "flex",
    margin: "auto",
    flexDirection: "column",
  }),
  selected: css({
    backgroundColor: "#FDD835",
  }),
}
