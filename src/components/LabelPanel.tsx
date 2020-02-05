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
import { Label as LabelModel } from "../models/gmail"

interface LabelPanelProps {
  labels: LabelModel[]
}

const LabelPanel: FunctionComponent<LabelPanelProps> = ({ labels }) => {
  const systemLabels = labels.filter(label => label.type === "System")
  const userLabels = labels.filter(label => label.type === "User")

  return (
    <div className={styles.labelPanel}>
      <Typography variant="h5" gutterBottom>
        Mail
      </Typography>
      {
        systemLabels.map((label, index) => {
          return (
            <Label key={index} label={label}>
              {STANDARD_ICONS[label.name]}
            </Label>
          )
        }) 
      }
      <div className={styles.buffer} />
      <Typography variant="h5">
        Folders
      </Typography>
      {
        userLabels.map((label, index) => {
          const color: string = label.color ? label.color.backgroundColor : "gray"
          return (
            <Label key={index} label={label}>
              <LensIcon style={{ height: "10px", color }} />
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
    flex: "0 0 165px",
    padding: "20px 0",
    color: "#585858",
  }),
  label: css({
    display: "flex",
    alignItems: "center",
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

const STANDARD_ICONS: { [key: string]: JSX.Element } = {
  "Inbox": <InboxIcon style={styles.standardIcon} />,
  "Snoozed": <SnoozeIcon style={styles.standardIcon} />,
  "Important": <LabelImportantIcon style={styles.standardIcon} />,
  "Starred": <StarRateIcon />,
  "Sent": <SendIcon style={styles.standardIcon} />,
  "Drafts": <DraftsIcon style={styles.standardIcon} />,
  "Spam": <ReportIcon style={styles.standardIcon} />,
  "Trash": <DeleteIcon style={styles.standardIcon} />,
}