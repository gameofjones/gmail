import React, { FunctionComponent } from "react"
import { css } from "emotion"
import envelope from "../resources/envelope.png"

interface EmptyStateProps {
  label: string
}

const EmptyState: FunctionComponent<EmptyStateProps> = ({ label }) => {
  return (
    <div className={styles.emptyState}>
      <img width="275px" alt="" src={envelope} />
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
