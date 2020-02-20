import React, { FunctionComponent } from "react"
import { css } from "emotion"
import { Message } from "../models/gmail"
import { PreviewPane, EmptyState } from "."

interface ContainerProps {
  selectedMessage: Message | undefined
  messages: Message[]
}

const RightPaneContainer: FunctionComponent<ContainerProps> = ({ selectedMessage, messages }) => {
  return (
    <div className={styles.previewPanel}>
    {
      selectedMessage &&
      <PreviewPane message={selectedMessage} />
    }
    {
      !selectedMessage && 
      messages.length !== 0 &&
      <EmptyState label="Select an item to read!" />
    }
    </div>
  )
}

const appBorder = "2px solid #F4F4F4"

const styles = {
  previewPanel: css({
    flex: 1,
    color: "#585858",
    padding: "20px 30px",
    overflowY: "auto",
    borderLeft: appBorder,
  }),
}

export default RightPaneContainer
