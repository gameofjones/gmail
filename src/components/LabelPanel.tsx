import React, { FunctionComponent } from "react"
import { css } from "emotion"
import Typography from "@material-ui/core/Typography"

interface LabelPanelProps {
  labels: string[],
  custom: string[],
}

const LabelPanel: FunctionComponent<LabelPanelProps> = ({ labels, custom }) => {
  return (
    <div className={styles.labelPanel}>
      <Typography variant="h5" gutterBottom>
        Mail
      </Typography>
      {
        labels.map((label, index) => {
          return (
          <div key={index} className={styles.label}>
            <Typography variant="subtitle2" gutterBottom>
              {label}
            </Typography>
          </div>
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
    color: "darkgray",
    padding: "5px 0",
  })
}