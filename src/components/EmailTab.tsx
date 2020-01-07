import React, { FunctionComponent, useState } from "react"
import { css, cx } from "emotion"
import Typography from "@material-ui/core/Typography"
import AttachFileIcon from "@material-ui/icons/AttachFile"

interface EmailTabProps {
  index: number
  subject: string
  sender: string,
  sent: string,
  selected?: boolean,
}

const EmailTab: FunctionComponent<EmailTabProps> = ({ index, subject, sender, sent, selected }) => {
  const [isSelected, setSelected] = useState(selected)

  return (
    <div
      className={cx(styles.tab, { [styles.altBackground]: index%2 === 0 })}
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
            {sender}
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

export default EmailTab

const styles = {
  tab: css({
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
    maxWidth: "285px",
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
