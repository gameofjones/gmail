import React, { FunctionComponent } from "react"
import { css, cx } from "emotion"
import Typography from "@material-ui/core/Typography"

interface LabelProps {
  name: string
  selected?: boolean
}

const Label: FunctionComponent<LabelProps> = ({ name, children, selected }) => {
  return (
    <div className={cx(styles.label, { [styles.selected]: selected })}>
      <Typography variant="subtitle2" gutterBottom>
        {children}{name}
      </Typography>
    </div>
  )
}

export default Label

const styles = {
  label: css({
    display: "flex",
    "align-items": "center",
    color: "darkgray",
    padding: "5px 0",
  }),
  selected: css({
    color: "#2979FF",
  })
}
