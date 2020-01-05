import React, { FunctionComponent } from "react"
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

const EmailTab: FunctionComponent<EmailTabProps> = ({ index, subject, sender, sent }) => {
  return (
    <div className={styles.tab}>
      <div className={styles.leftSide} style={{ backgroundColor: "#FBC02D" }} />
      <div className={cx(styles.contents, { [styles.altBackground]: index%2 === 0 })}>
        <div style={{ flex: 1 }}>
          <label style={styles.subject}>{subject}</label>
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
  }),
  contents: css({
    flex: 1,
    display: "flex",
    padding: "20px 20px 10px 20px",
    color: "#585858",
    backgroundColor: "#F9F9F8",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "#BBDEFB"
    },
  }),
  altBackground: css({
    backgroundColor: "#F1F1F1",
  }),
  subject: {
    padding: "10px",
  },
  sender: {
    padding: "10px 10px 10px 12px"
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
  selected: {
    backgroundColor: "#FDD835"
  }
}
