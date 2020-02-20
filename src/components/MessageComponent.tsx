import React, { FunctionComponent, useState, useEffect, useContext } from "react"
import { css, cx } from "emotion"
import { AttachFileIcon, Typography } from "./MaterialUI"
import { Message } from "../models/gmail"
import { MailContext } from "../store/StoreProvider"
import { setMessage } from "../store/actions"

const HEADERS = {
  SUBJECT: "subject",
  FROM: "from",
  DATE: "date",
}

interface MessageComponentProps {
  index: number
  message: Message
}

const MessageComponent: FunctionComponent<MessageComponentProps> = ({ index, message }) => {
  const [isSelected, setSelected] = useState(false)
  const [subject, setSubject] = useState("")
  const [from, setFrom] = useState("")
  const [date, setDate] = useState("")

  let { dispatch } = useContext(MailContext)

  useEffect(()=> {
    if (message.payload) {
      const { headers } = message.payload

      const getHeaderValue = (name: string) => {
        if (!headers) return undefined
        const header = headers.find(header => header.name === name)
      
        if (!header) return undefined
        return header.value
      }

      const subject = getHeaderValue(HEADERS.SUBJECT)
      const from = getHeaderValue(HEADERS.FROM)
      const date = getHeaderValue(HEADERS.DATE)

      if (subject) setSubject(subject)
      if (from) setFrom(from)
      if (date) setDate(date)
    }
  },[message.payload])

  return (
    <div
      className={cx(styles.message, { [styles.altBackground]: index%2 === 0 })}
      onClick={() => {
        setSelected(!isSelected)
        setMessage(dispatch, message)
      }}
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
            {date}
          </Typography>
        </div>
      </div>
    </div>
  )
}

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
    textAlign: "center",
  }),
  selected: css({
    backgroundColor: "red",
  }),
}

export default MessageComponent
