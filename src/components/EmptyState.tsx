import React, { FunctionComponent } from "react"
import { css } from "emotion"

interface EmptyStateProps {
  label: string
}

const EmptyState: FunctionComponent<EmptyStateProps> = ({ label }) => {
  return (
    <div className={styles.emptyState}>
      <img width="275px" alt="" src="https://cdn4.iconfinder.com/data/icons/flatified/512/envelope.png" />
      <br />
      <label>{label}</label>
    </div>
  )
}

const styles = {
  emptyState: css({
    marginTop: "10px",
    textAlign: "center"
  }),
}

export default EmptyState
