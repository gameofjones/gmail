import React, { FunctionComponent, useState, useEffect, useContext } from "react"
import { css, cx } from "emotion"
import { AttachFileIcon, Typography } from "./MaterialUI"
import { Message, HeaderMap } from "../models/gmail"
import { MailContext } from "../store/StoreProvider"
import { setMessage } from "../store/actions"
import { mapHeaders } from "../tools"

interface MessageComponentProps {
  index: number
  message: Message
  isSelected: boolean
}

const MessageComponent: FunctionComponent<MessageComponentProps> = ({ index, message, isSelected }) => {
  const [headerMap, setHeaderMap] = useState<HeaderMap>()

  let { dispatch } = useContext(MailContext)

  useEffect(()=> {
    if (message.payload) {
      const { headers } = message.payload
      const headerMap: HeaderMap | undefined = mapHeaders(headers)
      setHeaderMap(headerMap)
    }
  },[message.payload])

  return (
    <div
      className={styles.message}
      onClick={() => {
        setMessage(dispatch, message)
      }}
    >
      <div className={cx(styles.leftSide, { [styles.selected]: isSelected })} />
      {
        headerMap &&
        <div className={styles.contents}>
          <div style={{ flex: 1 }}>
            <label className={styles.subject}>{headerMap.subject}</label>
            <Typography
              variant="caption"
              display="block"
              style={styles.sender}
              gutterBottom>
              {headerMap.from}
            </Typography>
          </div>
          <div className={styles.rightSide}>
            <AttachFileIcon />
            <Typography
              variant="caption"
              display="block"
              style={styles.sender}
              gutterBottom>
              {headerMap.date}
            </Typography>
          </div>
        </div>
      }
    </div>
  )
}

const styles = {
  message: css({
    display: "flex",
    cursor: "pointer",
    borderBottom: "1px solid #f4f4f4",
    backgroundColor: "white",
    ":hover": {
      backgroundColor: "#BBDEFB"
    },
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
    backgroundColor: "#FFCA28",
  }),
}

export default MessageComponent
