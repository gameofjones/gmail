import React, { FunctionComponent } from "react"
import { css } from "emotion"
import Typography from "@material-ui/core/Typography"
import InboxIcon from "@material-ui/icons/Inbox"
import SnoozeIcon from "@material-ui/icons/Snooze"
import LabelImportantIcon from "@material-ui/icons/LabelImportant"
import StarRateIcon from "@material-ui/icons/StarRate"
import SendIcon from "@material-ui/icons/Send"
import DraftsIcon from "@material-ui/icons/Drafts"
import ReportIcon from "@material-ui/icons/Report"
import DeleteIcon from "@material-ui/icons/Delete"
import LensIcon from "@material-ui/icons/Lens"
import Label from "./Label"

interface LabelPanelProps {
  custom: string[]
}

const LabelPanel: FunctionComponent<LabelPanelProps> = ({ custom }) => {
  return (
    <div className={styles.labelPanel}>
      <Typography variant="h5" gutterBottom>
        Mail
      </Typography>
      <Label name="Inbox" selected><InboxIcon style={styles.standardIcon} /></Label>
      <Label name="Snoozed"><SnoozeIcon style={styles.standardIcon} /></Label>
      <Label name="Important"><LabelImportantIcon style={styles.standardIcon} /></Label>
      <Label name="Starred"><StarRateIcon /></Label>
      <Label name="Sent"><SendIcon style={styles.standardIcon} /></Label>
      <Label name="Drafts"><DraftsIcon style={styles.standardIcon} /></Label>
      <Label name="Spam"><ReportIcon style={styles.standardIcon} /></Label>
      <Label name="Trash"><DeleteIcon style={styles.standardIcon} /></Label>
      <div className={styles.buffer} />
      <Typography variant="h5">
        Folders
      </Typography>
      {
        custom.map((label, index) => {
          return (
            <Label key={index} name={label}>
              <LensIcon style={{ height: "10px", color: "red" }} />
            </Label>
          )
        })
      }
    </div>
  )
}

export default LabelPanel

const styles = {
  labelPanel: css({
    flex: "0 0 200px",
    padding: "20px 0",
    color: "#585858",
  }),
  label: css({
    display: "flex",
    "align-items": "center",
    color: "darkgray",
    padding: "5px 0",
  }),
  standardIcon: {
    height: "16px"
  },
  buffer: css({
    paddingTop: "10px",
  })
}