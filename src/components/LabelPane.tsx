import React, { FunctionComponent } from "react"
import { css } from "emotion"
import {
  InboxIcon,
  SnoozeIcon,
  LabelImportantIcon,
  StarRateIcon,
  SendIcon,
  DraftsIcon,
  ReportIcon,
  DeleteIcon,
  LensIcon,
  Typography,
} from "./MaterialUI"
import Label from "./Label"
import { Label as LabelModel } from "../models/gmail"

interface LabelPaneProps {
  labels: LabelModel[]
}

const LabelPane: FunctionComponent<LabelPaneProps> = ({ labels }) => {
  const systemLabels = labels.filter(label => label.type === "System")
  const userLabels = labels.filter(label => label.type === "User")

  return (
    <div className={styles.labelPanel}>
      <Typography variant="h5" gutterBottom>Mail</Typography>
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
      <Typography variant="h5">Folders</Typography>
      {
        userLabels.map((label, index) => {
          const color: string = (label.color?.backgroundColor || "gray")
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

const styles = {
  labelPanel: css({
    flex: "0 0 165px",
    padding: "20px 0",
    color: "#585858",
  }),
  standardIcon: {
    height: "16px"
  },
  buffer: css({
    paddingTop: "10px",
  }),
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

export default LabelPane
