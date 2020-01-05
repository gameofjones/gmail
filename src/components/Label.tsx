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
      {children}
      <Typography variant="subtitle2" style={{ margin: "2px auto 0 4px" }} gutterBottom>
        {name}
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
    ":hover": {
      color: "#2979FF",
      cursor: "pointer",
    }
  }),
  selected: css({
    color: "#2979FF",
  })
}
